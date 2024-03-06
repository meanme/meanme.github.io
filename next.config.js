/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    output: "export",
    distDir: 'out',
    reactStrictMode: true,
    compiler: {
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
