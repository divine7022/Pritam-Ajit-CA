# Email Setup Instructions

This document explains how to set up email functionality for the career application form.

## Option 1: Using EmailJS (Recommended for Frontend-only)

### Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new service (Gmail, Outlook, etc.)

### Step 2: Create Email Templates

1. In EmailJS dashboard, go to "Email Templates"
2. Create a template for career applications with these variables:
   - `{{to_email}}` - recipient email
   - `{{from_name}}` - applicant name
   - `{{from_email}}` - applicant email
   - `{{mobile_number}}` - applicant mobile
   - `{{message}}` - application details

### Step 3: Update Configuration

1. Open `src/lib/emailService.ts`
2. Replace the placeholder values:
   ```typescript
   const EMAILJS_SERVICE_ID = "your_actual_service_id";
   const EMAILJS_TEMPLATE_ID = "your_actual_template_id";
   const EMAILJS_PUBLIC_KEY = "your_actual_public_key";
   ```

## Option 2: Using Backend Server (More Secure)

### Step 1: Set up Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   npm install
   ```

### Step 2: Configure Email

1. Create a `.env` file in the backend folder:

   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. For Gmail, you need to:
   - Enable 2-factor authentication
   - Generate an "App Password"
   - Use the app password in EMAIL_PASS

### Step 3: Start Backend Server

```bash
npm start
# or for development
npm run dev
```

### Step 4: Update Frontend

1. Open `src/lib/emailService.ts`
2. Uncomment the backend option in `CareerPage.tsx`:
   ```typescript
   // Use backend instead of EmailJS
   await sendEmailViaBackend(emailData);
   ```

## Option 3: Using Formspree (Easiest)

### Step 1: Create Formspree Account

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint URL

### Step 2: Update Form Submission

Replace the email service call with Formspree:

```typescript
const onSubmit = async (data: CareerFormData) => {
  setIsSubmitting(true);

  try {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("cv", data.cv[0]);
    formData.append("resume", data.resume[0]);

    const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      toast.success("Application submitted successfully!");
      setIsSubmitted(true);
    }
  } catch (error) {
    toast.error("Failed to submit application");
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing

1. Start your development server:

   ```bash
   npm run dev
   ```

2. Navigate to `/career` page

3. Fill out the form and submit

4. Check the target email (xyz@gmail.com) for the application

## Troubleshooting

### EmailJS Issues

- Verify your service ID, template ID, and public key
- Check EmailJS dashboard for delivery status
- Ensure your email service is properly configured

### Backend Issues

- Check if the backend server is running
- Verify email credentials in .env file
- Check server logs for error messages

### General Issues

- Check browser console for errors
- Verify network requests in browser dev tools
- Ensure all required fields are filled

## Security Notes

- Never commit email credentials to version control
- Use environment variables for sensitive data
- Consider rate limiting for production use
- Validate and sanitize all form inputs
