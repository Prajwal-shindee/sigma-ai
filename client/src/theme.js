export const colorTokens = {
  grey: {
    50: "#fafafa",
    200: "#eeeeee",
    400: "#bdbdbd",
    500: "#9e9e9e",
    700: "#616161",
  },
  primary: {
    50: "#83d18d",
    100: "#7ece89",
    200: "#77cb83",
    300: "#70c77d",
    400: "#68c377",
    500: "#60bf70",
    600: "#5bb76c",
    700: "#56af68",
    800: "#51a763",
    900: "#4da05e",
  },
};

export const themeSettings = (mode) => {
  return {
    palette: {
      primary: {
        dark: colorTokens.primary[700],
        main: '#ff7444',
        light: colorTokens.primary[50],
      },
      neutral: {
        dark: colorTokens.grey[700],
        main: colorTokens.grey[500],
        mediumMain: colorTokens.grey[400],
        medium: colorTokens.grey[200],
        light: colorTokens.grey[50],
      },
      background: {
        default: colorTokens.grey[10],
        alt: colorTokens.grey[0],
      },
    },
    typography: {
      fontSize: 12,
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 24,
      },
      h4: {
        fontSize: 20,
      },
      h5: {
        fontSize: 16,
      },
      h6: {
        fontSize: 14,
      },
    },
  };
};
