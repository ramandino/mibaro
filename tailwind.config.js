/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {"main":"#004AAD","verdeclaro":"#b0e5d0","verdeoscuro":"rgba(92,202,238,0.41)"}
      }

    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.gradient-text': {
          background: 'radial-gradient( circle farthest-corner at 10% 10%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% )',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

