/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            // Set "Inter" as the default sans-serif font family
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            // Define your color palette here
            // "Light and airy" theme with some color
            colors: {
                'background': '#F7F9FC', // A very light, slightly cool background
                'text-primary': '#2D3748', // Dark gray for primary text, good contrast
                'text-secondary': '#4A5568', // Lighter gray for secondary text
                'primary-accent': '#3B82F6', // A vibrant blue as a primary accent (e.g., for links, buttons)
                // You can change this to any color you like!
                // Examples: Teal: '#14B8A6', Purple: '#8B5CF6', Green: '#10B981'
                'light-accent': '#E0E7FF', // A very light shade of the primary accent, for subtle backgrounds or highlights
                'border-color': '#CBD5E1', // Light gray for borders
            },
            // Add custom "glassmorphism" and "depth" utilities if needed
            // For example, using backdrop-filter (requires enabling in your CSS if not default)
            // and box-shadows
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'depth-sm': '0 2px 4px rgba(0, 0, 0, 0.05)',
                'depth-md': '0 5px 10px rgba(0, 0, 0, 0.1)',
                'depth-lg': '0 10px 20px rgba(0, 0, 0, 0.1)',
            },
            // If you plan to use backdrop-filter for glassmorphism:
            // You might need to add a plugin if not using a version of Tailwind that supports it out of the box,
            // or ensure your global CSS enables it.
            // For example, if you use `backdrop-blur-md`, Tailwind handles this well.
        },
    },
    plugins: [
        // require('@tailwindcss/typography'), // Uncomment if you want to use the typography plugin for prose styling
        // require('@tailwindcss/forms'), // Uncomment if you need styled form elements
    ],
}
