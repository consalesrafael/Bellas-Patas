tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74',
                    400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c',
                    800: '#9a3412', 900: '#7c2d12',
                },
                lavender: {
                    50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
                    400: '#fbbf24', 500: '#f59e0b', 600: '#d97706',
                },
                cream: '#FFFBF5',
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
