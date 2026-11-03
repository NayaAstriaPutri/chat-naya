import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  applicationName: 'Naya Ai Asisten',
  title: 'Naya Ai Asisten',
  description:
    'Naya Ai Asisten, teman ceria untuk bertanya dan belajar.',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Naya Ai Asisten',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  interactiveWidget: 'resizes-content',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#b9e2ff" />
        <meta name="description" content={metadata.description as string} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Naya Ai Asisten" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
