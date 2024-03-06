/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    output: "export",
    basePath: "/meanme.github.io",
    reactStrictMode: true,
    compiler: {
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
