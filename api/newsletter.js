// Vercel serverless function to proxy newsletter signups to Google Sheets
// This handles CORS properly and communicates with Google Apps Script

export default async function handler(req, res) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ success: false, message: 'Method not allowed' });
    return;
  }

  try {
    const { email, source } = req.body;

    // Validate email
    if (!email || !email.includes('@')) {
      res.status(400).json({
        success: false,
        message: 'Invalid email address',
      });
      return;
    }

    // Get Google Apps Script endpoint from environment variable
    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      console.error('GOOGLE_SCRIPT_URL environment variable not set');
      res.status(500).json({
        success: false,
        message: 'Server configuration error',
      });
      return;
    }

    // Forward the request to Google Apps Script
    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source }),
    });

    const result = await response.json();

    // Return the response from Google Apps Script
    res.status(200).json(result);
  } catch (error) {
    console.error('Newsletter signup error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again.',
    });
  }
}
