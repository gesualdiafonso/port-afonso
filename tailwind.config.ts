import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {

        }
    },
    content: [
        "./app/**/*.{js, ts, jsx, tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    plugins: [

    ],
};

export default config;