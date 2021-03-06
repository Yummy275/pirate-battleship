module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                'grid-hover-bgc': 'rgba(250, 250, 250, 0.5)',
            }),
            backgroundImage: (theme) => ({
                'water-tile': "url('/src/images/board-grid-water.png')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
