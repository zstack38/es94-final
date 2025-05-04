# Breeze Home Solutions Website

A professional website for Breeze Home Solutions, a home services company offering HVAC, Plumbing, and Electrical services in Chicagoland.

## Features

- **Modern Homepage**: Clean design showcasing company services and benefits
- **Online Booking System**: Simple form for customers to schedule service appointments
- **Mobile Responsive**: Fully responsive design for all device sizes
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Next.js for optimal loading speeds

## Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Configured for Vercel

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

## Project Structure

- `/src/app`: Main application pages
  - `/page.tsx`: Homepage
  - `/book-now/page.tsx`: Service booking page
- `/src/components`: Reusable components
  - `/layout`: Layout components (Header, Footer, Contact)
  - `/ui`: UI components (BookingForm)
- `/public/images`: Static images for the website

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically build and deploy your site

Alternatively, you can deploy manually:

```bash
npm run build
```

Then deploy the generated `.next` folder to your hosting provider of choice.

## Customization

To customize the website for your needs:

- Update service information in `/src/app/page.tsx`
- Modify contact details in the Contact component
- Replace placeholder images in `/public/images/`
- Adjust colors and styling in the Tailwind classes
