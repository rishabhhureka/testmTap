// src/app/sitemap.xml.js
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps = async ({ res }) => {
  const siteUrl = 'https://mtap.byklabs.store'; // Your website URL

  const staticPages = [
    { loc: `${siteUrl}/`, lastmod: new Date().toISOString().slice(0, 10), changefreq: 'daily', priority: 1.0 },
    // Add more URLs for your static pages here
  ];

  const dynamicPages = [
    // Add dynamic pages if you have any
  ];

  const fields = [...staticPages, ...dynamicPages];

  return getServerSideSitemap(res, fields);
};

export default function SiteMap() {}
