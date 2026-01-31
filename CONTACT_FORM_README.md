# FAA Robotics Contact Form Setup

## Installation

First, install all dependencies:

```bash
npm install
```

## Running the Application

You have two options:

### Option 1: Run both frontend and backend together (Recommended)
```bash
npm run dev:all
```

This will start:
- Frontend (Vite) on http://localhost:5173
- Backend API on http://localhost:3001

### Option 2: Run separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend API:**
```bash
npm run server
```

## Contact Form Features

- **Name field** - Required
- **Email field** - Required, validated
- **Phone field** - Required
- **Message field** - Required
- **Success/Error alerts** - Visual feedback
- **Email notification** - Sent to rajeevnewton@gmail.com

## Email Configuration

The contact form uses Gmail SMTP with the following configuration:
- **Email:** rajeevnewton@gmail.com
- **App Password:** rgxg fkmp aymu hchm

## Theme Colors

- **Cyan Blue (#00ffff)** - Primary accent
- **Electric Yellow (#ffd700)** - Secondary accent  
- **Purple (#667eea to #764ba2)** - Gradient accents
- **Dark Navy (#0a0e27 to #1a1f3a)** - Background

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Check API status

## Email Template

The email template includes:
- Beautiful HTML formatting
- Gradient header with cyan and yellow
- Organized field display
- Responsive design
- Plain text fallback
