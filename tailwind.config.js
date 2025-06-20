
/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        // ...
        // make sure it's pointing to the ROOT node_module
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: []
}

export default config;