/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://liderstone.uz",
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
