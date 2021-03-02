module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'home-scroll': "url('./images/home-scroll.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
