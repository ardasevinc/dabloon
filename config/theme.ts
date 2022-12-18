interface Theme {
  config: {
    initialColorMode: "light" | "dark" | "system" | undefined;
  };
}

const theme: Theme = {
  config: {
    initialColorMode: "dark",
  },
};

export default theme;
