import { Flex, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex
      height="100vh"
      width="100vw"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        background="teal.500"
        p={12}
        rounded={6}
      >
        <Heading textColor="white" verticalAlign="baseline">
          Welcome to Next.js + Chakra UI!
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
