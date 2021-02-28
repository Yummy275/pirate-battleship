module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'home-water': "url('images/home-water.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
