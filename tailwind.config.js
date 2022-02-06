module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '640px',
    },
    extend: {
      colors: {
        main: 'var(--main)',
        maincolor: '#abb1ad',
        sub: 'var(--sub)',
        back: 'var(--back)',
        'back-2': 'var(--back-2)',
        shadow: 'var(--shadow)',
        'back-shadow': 'var(--back-shadow)',
        primary: 'var(--primary)',
        'primary-bg': 'var(--primary-bg)',
        'primary-gradient': 'var(--primary-gradient)',
        danger: 'var(--danger)',
      },
    },
    backgroundImage: {
      'top-bg': 'var(--primary-gradient)',
    },
  },
  plugins: [],
}
