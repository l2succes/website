# Instagram Feed Setup

This document explains how to set up the Instagram feed integration for your portfolio website.

## What is this for?

The Instagram feed component displays your 5 most recent Instagram posts in the About section of your website. It uses Instagram's Basic Display API to fetch public posts from your account.

## Prerequisites

- An Instagram account (yours: @l2succes)
- A Facebook Developer account
- Your website must be running on localhost or a public domain

## Setup Instructions

### Step 1: Create a Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** in the top right
3. Click **"Create App"**
4. Select **"Consumer"** as the app type
5. Fill in the app details:
   - **App Name**: "Luc Succes Portfolio" (or any name)
   - **App Contact Email**: Your email
6. Click **"Create App"**

### Step 2: Add Instagram Basic Display

1. In your app dashboard, scroll down to **"Add Products"**
2. Find **"Instagram Basic Display"** and click **"Set Up"**
3. Scroll down to **"User Token Generator"** section
4. Click **"Add or Remove Instagram Testers"**
5. In the Instagram Testers section, add your Instagram account (@l2succes)

### Step 3: Accept the Tester Invitation

1. Go to your Instagram account settings (on mobile or web)
2. Navigate to **Settings** > **Apps and Websites** > **Tester Invites**
3. Accept the invitation from your Facebook app

### Step 4: Generate Access Token

1. Go back to your Facebook app dashboard
2. Navigate to **Instagram Basic Display** > **Basic Display**
3. Scroll to **"User Token Generator"**
4. Click **"Generate Token"** next to your Instagram account
5. Authorize the app to access your Instagram account
6. Copy the generated access token (it will be a long string)

### Step 5: Add Token to Your Project

1. In your project root directory, create a file named `.env.local` (if it doesn't exist)
2. Add the following line:
   ```
   NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_token_here
   ```
3. Replace `your_token_here` with the token you copied
4. Save the file
5. Restart your development server (`npm run dev`)

### Step 6: Verify It Works

1. Navigate to the About section on your website
2. You should see a grid of your 5 most recent Instagram posts
3. Each photo should be clickable and link to its Instagram post

## Token Expiration

Instagram access tokens expire after 60 days. When your token expires:

1. The Instagram feed will stop showing photos
2. You'll need to generate a new token following Steps 4-5 above
3. Update the token in your `.env.local` file

### Long-Lived Tokens (Optional)

For production, you can exchange your short-lived token for a long-lived token (valid for 60 days):

```bash
curl -i -X GET "https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN"
```

You can refresh long-lived tokens before they expire to extend them for another 60 days.

## Troubleshooting

### Photos not showing up

1. Check that `.env.local` exists in your project root
2. Verify the token starts with `NEXT_PUBLIC_` (required for client-side access)
3. Restart your dev server after adding/changing the token
4. Check browser console for any error messages

### "Invalid token" error

1. Your token may have expired - generate a new one
2. Ensure you accepted the tester invitation on Instagram
3. Verify the app has Instagram Basic Display enabled

### Rate limiting

Instagram API has rate limits. If you're testing frequently, you may hit these limits temporarily.

## Security Notes

- **Never commit** `.env.local` to git (it's in `.gitignore` by default)
- The token is prefixed with `NEXT_PUBLIC_` because it needs to be accessible client-side
- This means the token will be visible in your website's JavaScript
- Instagram Basic Display tokens are scoped only to public posts, so this is relatively safe
- For production, consider using a backend API route to hide the token

## Resources

- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developer Console](https://developers.facebook.com/)
- [Instagram Graph API Documentation](https://developers.facebook.com/docs/instagram-api/)