/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        purple: "#A259FF",
        grayText: {
          100: "#CCCCCC",
          200: "#858584",
          300: "#3B3B3B",
          400: "#2B2B2B"
        }
      },
      fontFamily: {
        "BodyMono": "SpaceMono-Regular",
        "BodySans": "WorkSans-Regular",
        "BodySansBold": "WorkSans-Bold",
      },
      container: {
        center: true
      },
      screens: {
        "xs": "375px",
        "sm": "634px",
        "md": "980px",
        "lg": "1280px",

      },
      spacing: {
        "3.25": "13px",
        "3.75": "15px",
        "4.5": "18px",
        "8.5": "30px",
        "13": "50px",
        "15": "60px",
        "18": "72px",
        "25": "100px",
        "27": "110px",
        "30": "120px",
        "38": "150px",
        "53": "209px",
        "59": "238px",
        "62": "248px",
        "63": "250px",
        "78": "316px",
        "81": "330px",
      }
    },
  },

  plugins: [function ({ addVariant }) {
    addVariant('child', '& > *')
    addVariant('child-hover', '& > *:hover')
  }

  ],
};
