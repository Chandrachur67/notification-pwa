/** @type {import('next').NextConfig} */
import pkg from 'next-pwa';

const withPWA = pkg({
    dest: 'public'
})
const nextConfig = {};

export default withPWA(nextConfig);
