# Make TON Telegram Mini App 2: JWT Authentication and Protected Routes

Welcome to the second guide in the **Make TON Telegram Mini App** series! This project demonstrates how to implement JWT authentication and protected routes in a Telegram Mini App using Next.js 14.

## Project Overview

This Telegram Mini App showcases:
- Setting up a Next.js 14 project with TypeScript and Tailwind CSS
- Implementing JWT authentication for Telegram Mini Apps
- Creating protected routes using middleware
- Automatic token reissuance for extended user sessions
- Basic TypeScript usage for type safety

## Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A Telegram account
- A Telegram Bot Token
- GitHub account
- Vercel account

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/nikandr-surkov/Make-TON-Telegram-Mini-App-2.git
   cd Make-TON-Telegram-Mini-App-2
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Telegram Bot Token and JWT secret:
   ```
   BOT_TOKEN=your_bot_token_here
   JWT_SECRET=your_jwt_secret_here
   ```

## Deployment and Usage

As this is a Telegram Mini App, you can't see the result directly in development mode. Follow these steps to deploy and use the app:

1. Push your code to a GitHub repository.

2. Sign up for a Vercel account if you haven't already.

3. Connect your GitHub repository to Vercel and deploy the app.

4. Once deployed, Vercel will provide you with a URL for your app.

5. Use this URL to set up your Telegram Mini App:
   - Go to [@BotFather](https://t.me/BotFather) on Telegram
   - Send the command `/newapp` or choose to edit an existing bot
   - Follow the prompts to set up your Mini App, using the Vercel URL as the Web App URL

6. Once set up, you can access your Mini App through Telegram on mobile devices or in the Web version of Telegram.

## Project Structure

- `app/page.tsx`: Main page component
- `app/protected/page.tsx`: Protected page component
- `app/api/auth/route.ts`: Authentication API route
- `app/api/session/route.ts`: Session API route
- `components/TelegramAuth.tsx`: Telegram authentication component
- `middleware.ts`: Middleware for protecting routes
- `utils/session.ts`: Session utility functions
- `utils/telegramAuth.ts`: Telegram authentication utility functions

## YouTube Channel

For video tutorials and more in-depth explanations, check out my YouTube channel:
[Nikandr Surkov](https://www.youtube.com/@NikandrSurkov)

## Next Steps

Stay tuned for the next guide in the **Make TON Telegram Mini App** series, where we'll explore more advanced features and TON integration!