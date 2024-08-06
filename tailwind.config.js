/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./dist/**/*.html",  
  "./src/**/*.{html,js}", // Additional path if you have source files outside dist
  "./*.html"],
  
  theme: {
    extend: {
      colors: {
        primary: {"main":"#004AAD","verdeclaro":"#b0e5d0","verdeoscuro":"rgba(92,202,238,0.41)","oscuroverde":"#27576F"}
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
        ".container-caja":{
          "min-width": "20rem",
          "font-weight": "700",
          "border-radius": "0.5rem",
          "font-size":"1.25rem",
          "line-height": "1.75rem",
          "background-color":"#27576F",
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}

