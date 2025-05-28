// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Import the Vite plugin
import icon from 'astro-icon'; // 1. Import astro-icon

// https://astro.build/config
export default defineConfig({
    site: 'https://NHagar.github.io', // Replace NHagar with your GitHub username
    // base: '/', // Or '/your-repo-name/' if a project page

    integrations: [
        icon({
            // You can specify icon packs to include, or it will try to auto-discover
            // For example, to explicitly include Material Design Icons:
            include: {
                mdi: ['*'], // Include all icons from Material Design Icons
            }
            // If you don't specify `include`, astro-icon attempts to find used icons.
            // Explicitly including can sometimes be more reliable or faster.
        }) // 2. Add astro-icon to the integrations array
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
