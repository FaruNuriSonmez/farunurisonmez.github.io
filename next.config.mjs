import createMDX from '@next/mdx';
/** 
 * @description Next.js configuration 
 * @type {import('next').NextConfig} 
 * */



const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    }
})

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    experimental: {
        appDir: true,
        mdxRs: true
    }
};

export default withMDX(nextConfig);
