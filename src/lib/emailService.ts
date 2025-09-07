import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface CareerApplicationData {
  name: string;
  mobile: string;
  email: string;
  cvFile?: File;
  resumeFile?: File;
}

export const sendCareerApplicationEmail = async (data: CareerApplicationData): Promise<void> => {
  try {
    // Prepare template parameters
    const templateParams = {
      to_email: 'xyz@gmail.com', // The email address to receive the application
      from_name: data.name,
      from_email: data.email,
      mobile_number: data.mobile,
      message: `
        New Job Application Received!
        
        Applicant Details:
        - Name: ${data.name}
        - Email: ${data.email}
        - Mobile: ${data.mobile}
        
        Please check the attached files for CV and Resume.
        
        This application was submitted through the company website.
      `,
      reply_to: data.email,
    };

    // Send email using EmailJS
    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', result);
    
    // Send confirmation email to applicant
    await sendConfirmationEmail(data);
    
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send application email');
  }
};

export const sendConfirmationEmail = async (data: CareerApplicationData): Promise<void> => {
  try {
    const templateParams = {
      to_email: data.email, // Send confirmation to applicant
      from_name: 'Pritam Ajit & Company',
      from_email: 'xyz@gmail.com',
      applicant_name: data.name,
      message: `
        Dear ${data.name},
        
        Thank you for your interest in joining our team at Pritam Ajit & Company.
        
        We have successfully received your job application and will review it carefully. 
        If your profile matches our requirements, we will contact you soon.
        
        Best regards,
        HR Team
        Pritam Ajit & Company
        Chartered Accountants
      `,
    };

    // You can create a separate template for confirmation emails
    const confirmationTemplateId = 'YOUR_CONFIRMATION_TEMPLATE_ID'; // Replace with confirmation template ID
    
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      confirmationTemplateId,
      templateParams
    );

    console.log('Confirmation email sent successfully');
    
  } catch (error) {
    console.error('Failed to send confirmation email:', error);
    // Don't throw error for confirmation email failure
  }
};

// Alternative: Simple email sending using a backend service
export const sendEmailViaBackend = async (data: CareerApplicationData): Promise<void> => {
  try {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('mobile', data.mobile);
    formData.append('to_email', 'xyz@gmail.com');
    
    if (data.cvFile) {
      formData.append('cv', data.cvFile);
    }
    if (data.resumeFile) {
      formData.append('resume', data.resumeFile);
    }

    // Replace with your backend endpoint
    const response = await fetch('/api/send-career-email', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }

    console.log('Email sent via backend successfully');
    
  } catch (error) {
    console.error('Failed to send email via backend:', error);
    throw new Error('Failed to send application email');
  }
};
