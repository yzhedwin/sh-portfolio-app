/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yzhedwin.com', // Replace with your domain
  generateRobotsTxt: true,     // Generate robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
    ],
  },
}
