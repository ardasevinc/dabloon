import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>Next.js + Chakra UI</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
