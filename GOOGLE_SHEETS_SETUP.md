# Google Sheets Newsletter Integration Setup

This guide will help you set up the Google Sheets integration for the newsletter signup form on the Momentum Build website.

## Overview

When users sign up for the newsletter, their email addresses will be automatically saved to a Google Sheet in your Momentum Build Google account. This allows you to:
- Track all newsletter signups in one place
- Export the data anytime for email campaigns
- View signup timestamps and manage your subscriber list

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and sign in with your Momentum Build Google account
2. Create a new spreadsheet
3. Name it: **"Momentum Build Newsletter Signups"**
4. In the first row, add these column headers:
   - A1: `Timestamp`
   - B1: `Email`
   - C1: `Source`

Your sheet should look like this:

```
| Timestamp | Email | Source |
|-----------|-------|--------|
|           |       |        |
```

## Step 2: Create the Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code in the script editor
3. Paste the following code:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);
    var email = data.email;

    // Validate email
    if (!email || !email.includes('@')) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Invalid email address'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    // Check for duplicates
    var emailColumn = sheet.getRange('B:B').getValues();
    for (var i = 1; i < emailColumn.length; i++) {
      if (emailColumn[i][0] === email) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          message: 'This email is already subscribed'
        })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Add the new row with timestamp, email, and source
    var timestamp = new Date();
    var source = data.source || 'Website';
    sheet.appendRow([timestamp, email, source]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Successfully subscribed!'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'An error occurred. Please try again.'
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Test function (optional - for testing in Apps Script editor)
function testDoPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        email: 'test@example.com',
        source: 'Test'
      })
    }
  };
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Click the **Save** icon (💾) or press `Ctrl+S` / `Cmd+S`
5. Name your project: **"Newsletter Signup Handler"**

## Step 3: Deploy as Web App

1. In the Apps Script editor, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Newsletter signup endpoint"
   - **Execute as**: Me (your Momentum Build account email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. You may need to authorize the script:
   - Click **Authorize access**
   - Choose your Momentum Build Google account
   - Click **Advanced** → **Go to Newsletter Signup Handler (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/AKfycby.../exec`)
8. **IMPORTANT**: Save this URL - you'll need it in the next step!

## Step 4: Configure the Website

1. In your local development environment, create a file named `.env` in the project root
2. Add this line to the file (replace with your actual URL):

```
VITE_NEWSLETTER_ENDPOINT=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
```

3. Save the file

**Note**: The `.env` file is already in `.gitignore`, so it won't be committed to git (this is for security).

## Step 5: Configure for Production (Netlify/Vercel)

After pushing your code changes, you'll need to add the environment variable to your hosting platform:

### For Netlify:
1. Go to your site dashboard on Netlify
2. Navigate to **Site settings** → **Environment variables**
3. Click **Add a variable**
4. Name: `VITE_NEWSLETTER_ENDPOINT`
5. Value: Your Google Apps Script web app URL
6. Click **Save**
7. Trigger a new deploy

### For Vercel:
1. Go to your project dashboard on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add new variable:
   - Name: `VITE_NEWSLETTER_ENDPOINT`
   - Value: Your Google Apps Script web app URL
4. Select all environments (Production, Preview, Development)
5. Click **Save**
6. Redeploy your site

## Step 6: Test the Integration

1. Start your local development server: `npm run dev`
2. Navigate to the homepage
3. Scroll to the newsletter signup section
4. Enter a test email address
5. Click "Get Early Access"
6. Check your Google Sheet - you should see a new row with:
   - Current timestamp
   - Your test email
   - Source: "Website"

## Troubleshooting

### "Failed to subscribe" error
- Check that your `.env` file has the correct URL
- Verify the URL ends with `/exec` (not `/dev`)
- Make sure the script is deployed and accessible to "Anyone"

### Emails not appearing in sheet
- Check the Apps Script execution logs (View → Executions in Apps Script editor)
- Verify the sheet has the correct column headers
- Test the script directly using the `testDoPost()` function

### Duplicate email detection not working
- Ensure column B is the Email column
- The check is case-sensitive

## Managing Subscribers

### Export to CSV
1. Open your Google Sheet
2. Click **File** → **Download** → **Comma-separated values (.csv)**
3. Use this CSV for email marketing tools

### Get Email Notifications
1. In Google Sheets, click **Tools** → **Notification rules**
2. Choose "A user submits a form" or "Any changes are made"
3. Set notification preferences
4. Click **Save**

## Security Notes

- The web app URL should be kept private (don't commit it to git)
- The script runs under your Google account
- Only POST requests are accepted
- Email validation and duplicate checking are built-in
- Consider adding rate limiting for production use

## Need Help?

If you encounter any issues, contact the development team or check the Apps Script execution logs for detailed error messages.
