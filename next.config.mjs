/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
        response: {
            fullBody: true,
        },
        request: {
            fullUrl: true,
        },
        error: {
            fullBody: true,
        },
    },
};

export default nextConfig;
