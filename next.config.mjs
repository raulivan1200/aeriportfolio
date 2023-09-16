import million from 'million/compiler';
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },}
};
 
const millionConfig = {
  auto: true,
  // if you're using RSC:
   auto: { mode: 'rsc' },
}
 
export default million.next(nextConfig, millionConfig);