import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: ['Googlebot', 'Bingbot', 'Slurp', '*'],
      allow: '/',
    },
    sitemap: 'https://v-athithyaramaa.com/sitemap.xml',
  };
}
