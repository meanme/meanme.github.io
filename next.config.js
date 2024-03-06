/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    output: "export",
    basePath: "/meanme.com",
    reactStrictMode: true,
    compiler: {
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
