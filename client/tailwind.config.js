/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'header-image':"url('/scr/assets/react.svg')"
      },
      width:{
        '128':'1000px'
      },
      padding:{
        '18':'40px'
      },
      fontFamily:{
        'roboto':['Roboto', 'serif']
      },
      fontSize:{
        'para':'40px',
        '2xl':['1.5rem', {
        lineHeight: '2rem',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }]
      },
      colors:{
        transparent:'transparent',
        'fade':'#FF0000',
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
          light:'#85d7ff'
        },
      },
      boxShadow:{
        "hello":"27px 21px 54px -24px rgba(0,0,0,0.57)"
      },
      aspectRatio:{
        '3/4':'3/4',
        '1/0.65':'1/0.65'
      }
    },
  },
  plugins: [],
}

