/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.dsmcdn.com'], //eklenen cdn domaini kullanılabilir
  },
};

module.exports = nextConfig;
