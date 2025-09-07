const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com', // Your email
    pass: process.env.EMAIL_PASS || 'your-app-password' // Your app password
  }
});

// Career application email endpoint
app.post('/api/send-career-email', upload.fields([
  { name: 'cv', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]), async (req, res) => {
  try {
    const { name, email, mobile, to_email } = req.body;
    const cvFile = req.files?.cv?.[0];
    const resumeFile = req.files?.resume?.[0];

    // Prepare attachments
    const attachments = [];
    if (cvFile) {
      attachments.push({
        filename: cvFile.originalname,
        path: cvFile.path
      });
    }
    if (resumeFile) {
      attachments.push({
        filename: resumeFile.originalname,
        path: resumeFile.path
      });
    }

    // Email to company (xyz@gmail.com)
    const companyMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: to_email || 'xyz@gmail.com',
      subject: `New Job Application from ${name}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Applicant Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
        </ul>
        <p>Please find the attached CV and Resume files.</p>
        <p>This application was submitted through the company website.</p>
      `,
      attachments: attachments
    };

    // Send email to company
    await transporter.sendMail(companyMailOptions);

    // Confirmation email to applicant
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: 'Application Received - Pritam Ajit & Company',
      html: `
        <h2>Thank you for your application!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for your interest in joining our team at <strong>Pritam Ajit & Company</strong>.</p>
        <p>We have successfully received your job application and will review it carefully. If your profile matches our requirements, we will contact you soon.</p>
        <p>Best regards,<br>
        HR Team<br>
        <strong>Pritam Ajit & Company</strong><br>
        Chartered Accountants</p>
      `
    };

    // Send confirmation email
    await transporter.sendMail(confirmationMailOptions);

    res.json({ 
      success: true, 
      message: 'Application submitted successfully and emails sent!' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send application email' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
