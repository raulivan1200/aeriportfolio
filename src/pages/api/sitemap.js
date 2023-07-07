// pages/api/sitemap.js

const generateSitemap = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      
      
      <url>
        <loc>https://aeriportfolio.vercel.app/</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      
      <url>
        <loc>https://aeriportfolio.vercel.app/Salessystem</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      <url>
        <loc>https://aeriportfolio.vercel.app/Woffles</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      <url>
        <loc>https://aeriportfolio.vercel.app/Billsplitter</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      <url>
        <loc>https://aeriportfolio.vercel.app/Teko</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      <url>
        <loc>https://aeriportfolio.vercel.app/Imagikids</loc>
        <lastmod>2023-07-07T19:45:12+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      
      </urlset>`;
  
    return xml;
  };
  
  export default function handler(req, res) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(generateSitemap());
    res.end();
  }
  