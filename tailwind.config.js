/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}', './js/**/*.js'],
  theme: {
    extend: {
      colors: {
        theme1: {
          background: {
            main: 'hsl(222, 26%, 31%)',
            toggle: 'hsl(223, 31%, 20%)',
            screen: 'hsl(224, 36%, 15%)',
          },
          keys: {
            blue: {
              background: 'hsl(225, 21%, 49%)',
              shadow: 'hsl(224, 28%, 35%)',
            },
            red: {
              background: 'hsl(6, 63%, 50%)',
              shadow: 'hsl(6, 70%, 34%)',
            },
            orange: {
              background: 'hsl(30, 25%, 89%)',
              shadow: 'hsl(28, 16%, 65%)',
            },
          },
          text: {
            grayishBlue: 'hsl(221, 14%, 31%)',
            white: 'hsl(0, 0%, 100%)',
          },
        },

        theme2: {
          background: {
            main: 'hsl(0, 0%, 90%)',
            toggle: 'hsl(0, 5%, 81%)',
            screen: 'hsl(0, 0%, 93%)',
          },
          keys: {
            cyan: {
              background: 'hsl(185, 42%, 37%)',
              shadow: 'hsl(185, 58%, 25%)',
            },
            orange: {
              background: 'hsl(25, 98%, 40%)',
              shadow: 'hsl(25, 99%, 27%)',
            },
            yellow: {
              background: 'hsl(45, 7%, 89%)',
              shadow: 'hsl(35, 11%, 61%)',
            },
          },
          text: {
            grayishYellow: 'hsl(60, 10%, 19%)',
            white: 'hsl(0, 0%, 100%)',
          },
        },

        theme3: {
          background: {
            main: 'hsl(268, 75%, 9%)',
            toggle: 'hsl(268, 71%, 12%)',
            screen: 'hsl(268, 71%, 12%)',
          },
          keys: {
            violet: {
              background: 'hsl(281, 89%, 26%)',
              shadow: 'hsl(285, 91%, 52%)',
            },
            cyan: {
              background: 'hsl(176, 100%, 44%)',
              shadow: 'hsl(177, 92%, 70%)',
            },
            darkViolet: {
              background: 'hsl(268, 47%, 21%)',
              shadow: 'hsl(290, 70%, 36%)',
            },
          },
          text: {
            yellow: 'hsl(52, 100%, 62%)',
            darkBlue: 'hsl(198, 20%, 13%)',
            white: 'hsl(0, 0%, 100%)',
          },
        },
      },
      fontFamily: {
        sans: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
