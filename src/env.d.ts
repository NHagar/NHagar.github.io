/// <reference types="astro/client" />

// Declare a module for .yaml files
// This tells TypeScript that importing a .yaml file is valid
// and what type it should expect (e.g., any, or a more specific type).
// Using 'any' is a quick way to get it working.
declare module '*.yaml' {
    const data: any;
    export default data;
}

// You can also declare modules for other file types if needed, e.g.,
// declare module '*.json' {
//   const value: any;
//   export default value;
// }
