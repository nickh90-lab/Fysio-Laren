import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.fysio-laren.nl';
    const lastModified = new Date();

    const staticRoutes = [
        { url: baseUrl, priority: 1.0, changeFrequency: 'weekly' as const },
        { url: `${baseUrl}/fysiotherapie`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/fysiofit`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/gespecialiseerde-groepstraining`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/copd`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/neurologie`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/ons-team`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/de-praktijk`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/tarieven`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/afspraak-maken`, priority: 0.9, changeFrequency: 'monthly' as const },
        { url: `${baseUrl}/privacybeleid`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/algemene-voorwaarden`, priority: 0.3, changeFrequency: 'yearly' as const },
        { url: `${baseUrl}/klachtenregeling`, priority: 0.3, changeFrequency: 'yearly' as const },
    ];

    return staticRoutes.map((r) => ({ ...r, lastModified }));
}
