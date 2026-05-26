import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();

  if (response.status === 404) {
    const url = new URL(context.request.url);
    const pathname = url.pathname;
    
    // Avoid redirecting broken static assets (like images, stylesheets, or scripts)
    const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
    
    if (!hasFileExtension) {
      // Redirect page-level 404 errors directly to the index page
      return context.redirect('/', 302);
    }
  }

  return response;
});
