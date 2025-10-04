# Career Application Backend

This backend server handles career application submissions for Pritam Ajit & Company website.

## Features

- ✅ Secure file upload handling (CV and Resume)
- ✅ Email validation and sanitization
- ✅ Professional email templates
- ✅ Automatic confirmation emails to applicants
- ✅ File size and type validation
- ✅ Error handling and logging
- ✅ CORS configuration
- ✅ Environment-based configuration

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Email Settings

1. Copy the environment example file:
   ```bash
   cp env.example .env
   ```

2. Edit the `.env` file with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   COMPANY_EMAIL=xyz@gmail.com
   PORT=3001
   FRONTEND_URL=http://localhost:5173
   ```

### 3. Gmail App Password Setup

To use Gmail for sending emails, you need to create an App Password:

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Enable 2-Factor Authentication if not already enabled
3. Go to **Security** → **App passwords**
4. Select **Mail** as the app
5. Generate a new app password
6. Use this password (not your regular Gmail password) in the `EMAIL_PASS` field

### 4. Start the Server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

The server will start on `http://localhost:3001` (or the port specified in your `.env` file).

### 5. Test the Setup

Visit `http://localhost:3001/api/health` to check if the server is running and email is configured.

## API Endpoints

### POST `/api/send-career-email`

Submits a career application with file attachments.

**Request:**
- Method: POST
- Content-Type: multipart/form-data
- Body:
  - `name` (string, required): Applicant's full name
  - `email` (string, required): Applicant's email address
  - `mobile` (string, required): 10-digit mobile number
  - `cv` (file, required): CV file (PDF, DOC, DOCX, max 5MB)
  - `resume` (file, required): Resume file (PDF, DOC, DOCX, max 5MB)
  - `to_email` (string, optional): Company email (defaults to COMPANY_EMAIL)

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully and confirmation email sent!",
  "applicationId": 1234567890
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "emailConfigured": true
}
```

## File Upload Security

- Maximum file size: 5MB per file
- Allowed file types: PDF, DOC, DOCX
- Filenames are sanitized to prevent security issues
- Files are automatically cleaned up on error

## Email Templates

The server sends two emails:

1. **Application Email** (to company):
   - Professional HTML template
   - Includes applicant details
   - Attached CV and Resume files

2. **Confirmation Email** (to applicant):
   - Branded confirmation message
   - Professional styling
   - Application ID for reference

## Error Handling

The server includes comprehensive error handling for:
- Invalid file types or sizes
- Missing required fields
- Email configuration issues
- Network connectivity problems
- File upload failures

## Production Deployment

For production deployment:

1. Set up environment variables on your hosting platform
2. Ensure the uploads directory has proper permissions
3. Configure your domain in the CORS settings
4. Use a process manager like PM2 for Node.js applications
5. Set up SSL certificates for HTTPS

## Troubleshooting

### Email not sending
- Verify EMAIL_USER and EMAIL_PASS are correct
- Check if 2FA is enabled and app password is generated
- Ensure Gmail allows less secure apps (if not using app password)

### File upload issues
- Check file size (must be under 5MB)
- Verify file type (only PDF, DOC, DOCX allowed)
- Ensure uploads directory exists and has write permissions

### CORS errors
- Verify FRONTEND_URL matches your frontend domain
- Check if the frontend is making requests to the correct backend URL

## Security Considerations

- All file uploads are validated for type and size
- Filenames are sanitized to prevent path traversal attacks
- Environment variables are used for sensitive configuration
- CORS is properly configured for your frontend domain
- Error messages don't expose sensitive system information
