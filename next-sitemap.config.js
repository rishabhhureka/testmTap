// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://mtap.byklabs.store',
    generateRobotsTxt: true, // Generate robots.txt file
    robotsTxtOptions: {
      policies: [{ userAgent: '*', allow: '/' }],
    },
  };
  