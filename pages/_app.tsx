import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import theme from '../config/theme';

const themeExtended = extendTheme({
  colors: theme.colors,
  styles: theme.styles,
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={themeExtended}>
      <Head>
        <title>Next.js + Chakra UI</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
