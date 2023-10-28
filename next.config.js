/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com', 's3.us-west-2.amazonaws.com', "firebasestorage.googleapis.com","oaidalleapiprodscus.blob.core.windows.net"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
