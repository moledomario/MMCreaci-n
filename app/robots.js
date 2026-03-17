export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://mmcreacion.com.ar/sitemap.xml',
    host: 'https://mmcreacion.com.ar',
  };
}
