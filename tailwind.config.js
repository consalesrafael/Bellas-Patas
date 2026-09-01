tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4',
                    400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d',
                    800: '#9d174d', 900: '#831843',
                },
                lavender: {
                    50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd',
                    400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed',
                },
                cream: '#FFF8F0',
            },
            fontFamily: {
                display: ['Playfair Display', 'serif'],
                body: ['Poppins', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-delay': 'float 6s ease-in-out 2s infinite',
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
                'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
                'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
            },
            keyframes: {
                float: { '0%, 100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-20px)' } },
                fadeInUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
                fadeInLeft: { '0%': { opacity: '0', transform: 'translateX(-40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
                fadeInRight: { '0%': { opacity: '0', transform: 'translateX(40px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
                pulseSoft: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.7' } },
            },
        },
    },
};
