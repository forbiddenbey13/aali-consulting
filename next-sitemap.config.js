/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://yourdomain.com', // Replace with your actual Cloudflare domain
  generateRobotsTxt: true,
  
  // This function forces all URLs in the sitemap to be strictly lowercase
  transform: async (config, path) => {
    const lowercasePath = path.toLowerCase();
    
    return {
      loc: lowercasePath, // The canonical, lowercase URL
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}