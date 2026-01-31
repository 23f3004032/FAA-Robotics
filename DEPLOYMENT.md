# Netlify Deployment Guide

## Environment Variables Setup

In your Netlify dashboard, add these environment variables:

1. Go to Site settings → Environment variables
2. Add the following variables:

```
EMAIL_USER=rajeevnewton@gmail.com
EMAIL_APP_PASSWORD=rgxg fkmp aymu hchm
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory (already exists):
```
VITE_EMAIL_USER=rajeevnewton@gmail.com
VITE_EMAIL_APP_PASSWORD=rgxg fkmp aymu hchm
```

3. Run with Netlify Dev (recommended for testing functions):
```bash
npm run netlify
```

Or run the regular dev server:
```bash
npm run dev
```

## Deployment

1. Connect your repository to Netlify
2. Set the build command: `npm run build`
3. Set the publish directory: `dist`
4. Add environment variables in Netlify dashboard
5. Deploy!

The contact form will automatically use Netlify Functions for email sending.
