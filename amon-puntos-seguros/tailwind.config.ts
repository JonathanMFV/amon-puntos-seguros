import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                "color-green-one": "#517d6c",
                "color-green-two": "7AC7A9",
                "color-green-three": "#5fad8f",
                "color-gray-one": "#858585",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    daisyui: {
        themes: [ "black", "cupcake"],
    },
    plugins: [require("daisyui")],
};
export default config;
