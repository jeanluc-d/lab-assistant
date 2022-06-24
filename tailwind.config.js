function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgba(var(${variableName}))`;
  };
}

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        skin: {
          color: withOpacity("--color-text-color"),
          muted: "#fbbe5f",
          hover: withOpacity("--color-text-hover"),
          main: withOpacity("--color-text-main"),
        },
      },
      backgroundColor: {
        skin: {
          main: withOpacity("--color-main"),
          muted: withOpacity("--color-muted"),
          button: withOpacity("--color-button"),
          "button-hover": withOpacity("--color-button-hover"),
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      scale: ["focus-within"],
    },
  },
  plugins: [],
};
