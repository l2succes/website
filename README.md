# Luc Succès Portfolio

Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Animated Hero Section** - SVG logo animation with drawing effect and scale transition
- **About Section** - Personal bio with location and social links
- **Instagram Feed Integration** - Displays 5 most recent Instagram posts (requires API token)
- **Work/Projects Section** - Showcases past projects with custom styling
- **Skills Section** - Organized display of engineering, design, and entrepreneurship skills
- **Responsive Design** - Mobile-friendly layout with Tailwind CSS
- **Footer** - Social links and copyright information

## Configuration

### Instagram Feed (Optional)

To enable the Instagram feed in the About section, you'll need to set up Instagram Basic Display API:

1. Follow the instructions in [`docs/instagram-setup.md`](./docs/instagram-setup.md)
2. Create a `.env.local` file in the project root
3. Add your Instagram access token:
   ```
   NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_token_here
   ```
4. Restart the dev server

If no token is configured, the Instagram section will be hidden automatically.

## Project Structure

```
├── components/          # React components
│   ├── Home/           # Hero and Logo components
│   ├── WorkSection/    # Work/project showcase
│   ├── Footer.tsx      # Footer component
│   ├── InstagramFeed.tsx # Instagram integration
│   └── SocialLinks.tsx # Reusable social media links
├── pages/              # Next.js pages
│   ├── index.tsx       # Home page
│   └── api/            # API routes
├── public/             # Static assets
│   └── images/         # Images and logos
└── docs/               # Documentation
```

## Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Instagram API (optional)
NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_instagram_token_here
```

**Note:** `.env.local` is gitignored and should never be committed.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
