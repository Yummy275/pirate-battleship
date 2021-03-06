module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundColor: (theme) => ({
                'grid-hover-bgc': 'rgba(250, 250, 250, 0.7)',
                'grid-occ': 'hsl(0deg 0% 10% / 70%)',
                'grid-hit': 'hsl(0deg 100% 64% / 70%)',
                'grid-miss': 'hsl(233deg 100% 64% / 70%)',
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
