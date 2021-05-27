module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: {
        primary: '#00CECC',
        secondary: '#19778D',
        tertiary: '#302654'
      },
      bg: {
        primary: '#FEFEFE',
        secondary: '#E5EFEE',
        tertiary: '#F9F8F7'
      },
      ui: {
        element: {
          100: '#262C35',
          200: '#55545A',
          300: '#BFBDBB',
          400: '#EEEDEA',
          500: '#F9F8F7'
        },
        error: '#E16B6B',
        success: '#21A144'
      }
    },
    textColor: {
      transparent: 'transparent',
      current: 'currentColor',
      brand: {
        primary: '#00CECC',
        secondary: '#19778D',
        tertiary: '#302654'
      },
      element: {
        100: '#262C35',
        200: '#55545A',
        300: '#BFBDBB',
        400: '#EEEDEA',
        500: '#F9F8F7',
        600: '#FEFEFE'
      },
      error: '#E16B6B',
      success: '#21A144'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    borderRadius: {
      0: '0px',
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
      5: '4rem',
      full: '9999px'
    },
    spacing: {
      0: '0px',
      1: '1px',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      6: '1.5rem',
      7: '2rem',
      8: '4rem',
      9: '8rem',
      10: '16rem',
      11: '32rem',
      12: '64rem'
    },
    screens: {
      xs: '24rem',
      sm: '40rem',
      md: '48rem',
      lg: '64rem',
      xl: '80rem',
      '2xl': '96rem'
    }
  }
}
