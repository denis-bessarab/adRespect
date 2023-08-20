/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    backgroundPosition: {
      'top-left': 'top left 46%',
      'center': 'center',
    },
    letterSpacing: {
      '1%': '0.01em',
      '3%': '0.03em',
      '5%': '0.05em',
    },
    fontSize: {
      'xl': '60px',
      'lg': '48px',
      'm': '16px',
      'sm': '12px',
    },
    fontFamily: {
      'montserrat-medium': ['Montserrat-Medium', 'serif'],
      'montserrat-regular': ['Montserrat-Regular', 'serif'],
      'inter-regular': ['Inter-Regular', 'serif'],
      'inter-medium-italic': ['Inter-MediumItalic', 'serif'],
    },
    screens: {
      'desktop-lg': {'max': '1920px'},
      'desktop-m': {'max': '1440px'},
      'desktop-sm': {'max': '1280px'},
      'laptop': {'max': '1024px'},
      'tablet': {'max': '960px'},
      'tablet-sm': {'max': '630px'},
      'mobile': {'max': '480px'},
      'mobile-sm': {'max': '370px'},
    },
    spacing: {
      '0': '0',
      '0.125': '0.125rem',
      '0.25': '0.25rem',
      '0.375': '0.375rem',
      '0.5': '0.5rem',
      '0.625': '0.625rem',
      '0.75': '0.75rem',
      '0.875': '0.875rem',
      '1': '1rem',
      '1.25': '1.25rem',
      '1.5': '1.5rem',
      '1.75': '1.75rem',
      '2': '2rem',
      '2.25': '2.25rem',
      '2.5': '2.5rem',
      '2.75': '2.75rem',
      '3': '3rem',
      '3.5': '3.5rem',
      '4': '4rem',
      '5': '5rem',
      '6': '6rem',
      '7': '7rem',
      '8': '8rem',
      '9': '9rem',
      '10': '10rem',
      '11': '11rem',
      '12': '12rem',
      '13': '13rem',
      '14': '14rem',
      '15': '15rem',
      '16': '16rem',
      '17': '18rem',
      '18': '20rem',
      '19': '24rem',
      '25%': '25%',
      '50%': '50%',
      '75%': '75%',
      '100%': '100%',
    },
    colors: {
      'green': '#1B5B31',
      'light-copy': '#F5F0EC',
      'black': '#111',
      'white': '#fff',
      'beige': '#DCC1AB',
      'grey': '#F5F0EC',
    },
  },
  plugins: [],
};

