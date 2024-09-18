/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        formats: ["image/avif", "image/webp"],
    },

    compiler: {
        styledComponents: true,
    },

    // async rewrites() {
    //     return [
    //         {
    //             source: "/",
    //             destination: "/login",
    //         },
    //     ]
    // },

    async redirects() {
        return []
    },
}

export default nextConfig
