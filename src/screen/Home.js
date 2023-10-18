import Head from "../components/Head";
import React, { useState } from "react";
import HousesGroup from "../components/HousesGroup";
import FilterCard from "../components/FilterCard";

import { ChakraProvider, Container, HStack, theme } from "@chakra-ui/react";

const Home = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxWidth='100vw'>
        <Head />
        <HStack justify='center' spacing='0px' align='start'>
          <Container
            maxW='25vw'
            mx='0px'
            minH='100vh'
            my='0px'
            display={["none", "none", "none", "block"]}
          >
            <FilterCard />
          </Container>
          <Container maxW='100vw' mx='0px'>
            <HousesGroup />
          </Container>
        </HStack>
      </Container>
    </ChakraProvider>
  );
};

export default Home;
