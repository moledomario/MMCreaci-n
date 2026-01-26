import "./globals.css";

export const metadata = {
  title: 'MM Creación',
  description: 'Desarrollo web profesional',
  keywords: "landing pages",
  icons: {
    icon: '/MMsolo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"
    >
      <body>{children}</body>
    </html>
  );
};