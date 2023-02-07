/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'dynamic-100': 'clamp(2rem, 1.6vw + 1.7rem, 4.3rem)',
        'dynamic-200': 'clamp(1.125rem, 1.4vw + 0.9rem, 2.5rem)',
        'dynamic-300': 'clamp(1rem, 0.5vw + 0.9rem, 1.5rem)',
        'dynamic-400': 'clamp(0.875rem, 0.1vw + 0.9rem, 1rem)',
        'dynamic-500': 'clamp(1.25rem, 0.6vw + 1.1rem, 1.875rem)',
        'dynamic-600': 'clamp(1.125rem, 0.3vw + 1.1rem, 1.375rem)',
      },
      colors: {
        'bright-navy-blue': '#1C77C3',
        'bright-navy-blue-light-100': 'rgba(58, 134, 255, 0.09)',
        'bright-navy-blue-light-200': 'rgba(58, 134, 255, 0.2)',
        'bright-navy-blue-light-250': 'rgba(28, 119, 195, 0.25)',
        'bright-navy-blue-light-350': 'rgba(58, 134, 255, 0.35)',
        'bright-navy-blue-light-450': 'rgba(28, 119, 195, 0.45)',
        'bright-navy-blue-light-500': 'rgba(28, 119, 195, 0.5)',
        'blue-jeans': '#5AA9E6',
        'alice-blue': '#F1F6FF',
        'granite-gray': '#646464',
        'yale-blue': '#145389',
        'cyan-cornflower-blue': '#1e89c8',
        'light-cobalt-blue': '#3A86FF',
        'primary-100': '#D9D9D9',
        whatsapp: '#25D366',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '4rem',
        },
      },
      boxShadow: {
        'primary-white-100': '0px 0px 45px 45px rgba(255, 255, 255, 0.5)',
        'primary-white-200': 'inset 0px 4px 30px rgba(241, 246, 255, 0.7)',
        'primary-blue-100': 'inset 0px 4px 60px rgba(28, 119, 195, 0.25)',
        'primary-blue-200':
          '0px 4px 10px #F1F6FF, inset 0px 4px 22px rgba(28, 119, 195, 0.57)',
        'primary-blue-300': 'inset 0px 4px 50px rgba(28,119,195,0.3)',
      },
    },
  },
  plugins: [],
}
