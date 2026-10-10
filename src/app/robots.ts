import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/preview/', '/coming-soon'],
        },
        sitemap: 'https://fysio-laren.nl/sitemap.xml',
    };
}
