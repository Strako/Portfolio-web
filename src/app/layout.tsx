import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Armando Ibarra | Full-Stack Developer & QA Engineer',
  description:
    'Computer Systems Engineer with 3+ years in Full Stack Development and QA Automation. Specialized in AI-driven SDLC automation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
