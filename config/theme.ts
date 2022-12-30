interface Theme {
  config: {
    initialColorMode: 'light' | 'dark' | 'system' | undefined;
    useSystemColorMode: boolean;
  };
  colors: {
    bg: string;
    text: string;
    para: string;
    button: string;
  };
  styles: {
    global: {
      body: {
        bg: string;
        color: string;
      };
    };
  };
}

const theme: Theme = {
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#0f0e17',
    text: '#fffffe',
    para: '#a7a9be',
    button: '#ff8906',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: 'bg',
        color: 'text',
      },
    },
  },
};

export default theme;
