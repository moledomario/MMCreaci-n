import "./globals.css";
import ChatWidget from "./components/chat";
import { Roboto_Mono } from "next/font/google";
import { Inter } from "next/font/google";
const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: 'MM Creación | Desarrollo Web Profesional',
    template: '%s | MM Creación',
  },
  description: 'Potenciamos tu empresa con presencia web profesional. Diseño y desarrollo de landing pages, sitios web y aplicaciones a medida en Argentina.',
  keywords: [
    'desarrollo web', 'diseño web profesional', 'landing pages', 'páginas web',
    'sitio web empresarial', 'programación web', 'Next.js', 'React',
    'desarrollo web Argentina', 'agencia web', 'MM Creación',
  ],
  authors: [{ name: 'MM Creación' }],
  creator: 'MM Creación',
  metadataBase: new URL('https://mmcreacion.com.ar'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://mmcreacion.com.ar',
    siteName: 'MM Creación',
    title: 'MM Creación | Desarrollo Web Profesional',
    description: 'Potenciamos tu empresa con presencia web profesional. Diseño y desarrollo de landing pages, sitios web y aplicaciones a medida.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MM Creación - Desarrollo Web Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MM Creación | Desarrollo Web Profesional',
    description: 'Potenciamos tu empresa con presencia web profesional. Diseño y desarrollo de landing pages y sitios web.',
    images: ['/og-image.png'],
    creator: '@mm_programacion',
  },
  icons: {
    icon: '/MMsolo.png',
    apple: '/MMsolo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"
      className={inter.className}
    >
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
};