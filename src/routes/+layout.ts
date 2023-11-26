import { inject } from '@vercel/analytics';
 
inject({ mode: 'production' });

export const prerender = true;
export const trailingSlash = 'always';