const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

console.log('EMAIL_USER:', process.env.EMAIL_USER);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure multer for file uploads with validation
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Sanitize filename and add timestamp
    const sanitizedName = file.originalname.replace(/[^a-zA-Z0-9.-]/g, '_');
    cb(null, `${Date.now()}-${sanitizedName}`);
  }
});

// File filter for security
const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, DOC, and DOCX files are allowed.'), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
    files: 2 // Maximum 2 files (CV and Resume)
  }
});

// Email configuration with better error handling
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Validate email configuration
const validateEmailConfig = () => {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASS environment variables.');
    return false;
  }
  return true;
};

// Input validation middleware
const validateCareerApplication = (req, res, next) => {
  const { name, email, mobile } = req.body;
  
  // Basic validation
  if (!name || !email || !mobile) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and mobile number are required'
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address'
    });
  }

  // Mobile validation (10 digits)
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid 10-digit mobile number'
    });
  }

  next();
};

// Career application email endpoint
app.post('/api/send-career-email', 
  upload.fields([
    { name: 'cv', maxCount: 1 },
    { name: 'resume', maxCount: 1 }
  ]),
  validateCareerApplication,
  async (req, res) => {
    let uploadedFiles = [];
    
    try {
      // Validate email configuration
      if (!validateEmailConfig()) {
        return res.status(500).json({
          success: false,
          message: 'Email service is not properly configured'
        });
      }

      const { name, email, mobile, to_email } = req.body;
      const cvFile = req.files?.cv?.[0];
      const resumeFile = req.files?.resume?.[0];

      // Validate file uploads
      if (!cvFile || !resumeFile) {
        return res.status(400).json({
          success: false,
          message: 'Both CV and Resume files are required'
        });
      }

      // Track uploaded files for cleanup
      uploadedFiles = [cvFile.path, resumeFile.path];

      // Create transporter
      const transporter = createTransporter();

      // Prepare attachments
      const attachments = [];
      if (cvFile && cvFile.path) {
        attachments.push({
          filename: `CV_${cvFile.originalname}`,
          path: cvFile.path
        });
      }
      if (resumeFile && resumeFile.path) {
        attachments.push({
          filename: `Resume_${resumeFile.originalname}`,
          path: resumeFile.path
        });
      }

      // Email to company
      const companyMailOptions = {
        from: `"Pritam Ajit & Company" <${process.env.EMAIL_USER}>`,
        to: to_email || process.env.COMPANY_EMAIL || 'xyz@gmail.com',
        subject: `New Job Application from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Job Application Received</h2>
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e40af; margin-top: 0;">Applicant Details:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;"><strong>Name:</strong> ${name}</li>
                <li style="margin: 10px 0;"><strong>Email:</strong> ${email}</li>
                <li style="margin: 10px 0;"><strong>Mobile:</strong> ${mobile}</li>
                <li style="margin: 10px 0;"><strong>Application Date:</strong> ${new Date().toLocaleDateString('en-IN')}</li>
              </ul>
            </div>
            <p>Please find the attached CV and Resume files for your review.</p>
            <p style="color: #6b7280; font-size: 14px;">This application was submitted through the company website.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280; font-size: 12px;">
              <strong>Pritam Ajit & Company</strong><br>
              Chartered Accountants
            </p>
          </div>
        `,
        attachments: attachments
      };

      // Send email to company
      console.log('Sending email to company with attachments:', attachments.length);
      await transporter.sendMail(companyMailOptions);
      console.log(`Application email sent to company for ${name}`);

      // Confirmation email to applicant
      const confirmationMailOptions = {
        from: `"Pritam Ajit & Company" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Application Received - Pritam Ajit & Company',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #059669;">Thank you for your application!</h2>
            <p>Dear <strong>${name}</strong>,</p>
            <p>Thank you for your interest in joining our team at <strong>Pritam Ajit & Company</strong>.</p>
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
              <p style="margin: 0;">We have successfully received your job application and will review it carefully. If your profile matches our requirements, we will contact you soon.</p>
            </div>
            <p>We appreciate your interest in our organization and look forward to the possibility of working together.</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
            <p style="color: #6b7280;">
              Best regards,<br>
              <strong>HR Team</strong><br>
              <strong>Pritam Ajit & Company</strong><br>
              Chartered Accountants<br>
              <span style="font-size: 12px;">Application ID: ${Date.now()}</span>
            </p>
          </div>
        `
      };

      // Send confirmation email
      await transporter.sendMail(confirmationMailOptions);
      console.log(`Confirmation email sent to ${email}`);

      res.json({ 
        success: true, 
        message: 'Application submitted successfully and confirmation email sent!',
        applicationId: Date.now()
      });

    } catch (error) {
      console.error('Error processing career application:', error);
      
      // Clean up uploaded files on error
      uploadedFiles.forEach(filePath => {
        try {
          if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
          }
        } catch (cleanupError) {
          console.error('Error cleaning up file:', cleanupError);
        }
      });

      res.status(500).json({ 
        success: false, 
        message: 'Failed to process application. Please try again later.' 
      });
    }
  }
);

// Error handling middleware
app.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        success: false,
        message: 'File size too large. Maximum size allowed is 5MB.'
      });
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Too many files. Maximum 2 files allowed (CV and Resume).'
      });
    }
  }
  
  if (error.message.includes('Invalid file type')) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }

  console.error('Unhandled error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    emailConfigured: validateEmailConfig()
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received. Shutting down gracefully...');
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`🚀 Career Application Server is running on port ${PORT}`);
  console.log(`📧 Email configured: ${validateEmailConfig() ? 'Yes' : 'No'}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📁 Upload directory: ${uploadsDir}`);
  
  if (!validateEmailConfig()) {
    console.warn('⚠️  Warning: Email configuration is missing. Set EMAIL_USER and EMAIL_PASS environment variables.');
  }
});
