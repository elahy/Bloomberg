module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
      "10xl": ["10rem", "10rem"],
      bd: ["53px", "78px"],
    },
    fontFamily: {
      gilroy: ["Gilroy"],
    },
    extend: {
      colors: {
        "bd-green": "rgb(0, 106, 78)",
        "light-green": "rgb(230, 241, 238)",
        "black-rgba": "rgba(0, 0, 0, 0.7)",
      },
      animmation: {
        loading: "loading 4s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-short": "bounce 1s ease-in-out 5",
      },
      keyframes: {
        loading: {
          "0%": {
            left: "0px",
          },
          "100%": {
            left: "100px",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          wiggle: {
            "0%, 100%": { transform: "rotate(-3deg)" },
            "50%": { transform: "rotate(3deg)" },
          },
          bounce: {
            "0%, 100%": {
              transform: "translateY(-25%)",
              "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
            },
            "50%": {
              transform: "translateY(0)",
              "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["responsive", "motion-safe", "motion-reduce", "hover"],
    },
  },
  plugins: [],
};
