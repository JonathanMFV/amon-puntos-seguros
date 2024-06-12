import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                shake: {
                    "0%, 100%": { transform: "translateX(0)" },
                    "25%": { transform: "translateX(-5px)" },
                    "50%": { transform: "translateX(5px)" },
                    "75%": { transform: "translateX(-5px)" },
                },
            },
            animation: {
                shake: "shake 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
            },
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
                "gradient-circular":
                    "radial-gradient(circle, #000000, #254c4c, #000000, #000000)",
                "gradient-circular-2":
                    "radial-gradient(circle, #254c4c,#152426, #0b1314, #000000, #000000)",
                spots: 'url("/spots.svg")',
            },
        },
    },
    daisyui: {
        themes: ["black", "cupcake"],
    },
    plugins: [require("daisyui")],
};
export default config;
