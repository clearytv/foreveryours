/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    transpilePackages: ['@foreveryours/shared'],
    experimental: {
        appDir: true,
    }
};

export default config; 