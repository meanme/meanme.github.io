/** @type {import('next').NextConfig} */

const repo = 'meanme.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const { withContentlayer } = require("next-contentlayer")

const nextConfig = {
    output: "export",
    assetPrefix,
    basePath,
    reactStrictMode: true,
    compiler: {
        removeConsole: true,
    }
};

module.exports = withContentlayer({ ...nextConfig });
