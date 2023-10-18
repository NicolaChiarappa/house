import { useState } from "react";

import {
  HStack,
  VStack,
  Flex,
  Container,
  Box,
  Heading,
  Text,
  Link,
  IconButton,
  Button,
  Icon,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  Image,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiUserGroup, HiHome, HiArrowDown } from "react-icons/hi2";
import { IoOptionsOutline } from "react-icons/io5";

import { ColorModeSwitcher } from "./ColorModeSwitcher";

import FilterCard from "./FilterCard";
import MobileFilterCard from "./MobileFilterCard";

// This is the header component that is used on every page
const Head = () => {
  const [drawerState, setDrawerState] = useState(); // A state variable and its updater function used to manage the mobile drawer component's opened/closed state

  return (
    <Container maxW='100vw' padding='0px'>
      <VStack>
        <HStack mt={10} justify='space-between' w='100vw' px='10'>
          <Heading size='xl' mx='0px' textAlign='center'>
            Pavia Houses
          </Heading>

          <Image
            src='/logohouse.png'
            boxSize='13vh'
            fit='cover'
            borderRadius='5px'
          ></Image>
          <VStack>
            <IconButton
              mx='0px'
              padding='0px'
              variant='ghost'
              size='md'
              icon={<HamburgerIcon w='30px' h='30px'></HamburgerIcon>}
              onClick={() => {
                setDrawerState(!drawerState);
              }}
              display={["flex", "flex", "flex", "none"]}
            />
          </VStack>
        </HStack>
        <Heading
          size='md'
          px='10'
          textAlign='center'
          fontStyle='italic'
          fontWeight='light'
        >
          Non trovi la casa universitaria giusta per te?
        </Heading>
        <Heading
          size='lg'
          px='10'
          textAlign='center'
          fontStyle='normal'
          fontWeight='extrabold'
        >
          Pavia Houses
        </Heading>
        <Heading
          color='green.400'
          size='lg'
          px='10'
          textAlign='center'
          fontStyle='normal'
          fontWeight='extrabold'
        >
          LO FA AL POSTO TUO
        </Heading>
        <Button colorScheme='teal' textColor='blue'>
          <HStack>
            <p>Le stanze più cliccate</p>
            <Icon as={HiArrowDown} w='25px' h='25px'></Icon>
          </HStack>
        </Button>
      </VStack>
      <HStack
        justify={["flex-start", "flex-start", "flex-start", "space-between"]}
        mt='30px'
        mx='0px'
        minW='full'
      >
        {/* A mobile drawer component that's only visible on small screens */}
        <MobileDrawer state={drawerState} setState={setDrawerState} />

        {/* The main logo */}

        {/* The main navigation menu only on desktop */}
        <Container maxW='60vw' display={["none", "none", "none", "flex"]}>
          <HStack ml='15vw' spacing='25px'>
            <Link href='/'>
              <Heading fontSize='2xl'>House</Heading>
            </Link>
            <Link href='/buddy'>
              <Heading fontSize='2xl'>Buddy</Heading>
            </Link>
          </HStack>
        </Container>

        {/* The color mode switcher component */}
        <Container
          display={["none", "none", "none", "flex"]}
          padding='0px'
          maxW='fit-content'
          minW='fit-content'
          mx='0px'
          centerContent
        >
          <ColorModeSwitcher size={["none", "none", "none", "flex"]} />
        </Container>

        {/* The hamburger icon button that's only visible on small screens */}
      </HStack>
    </Container>
  );
};

// The mobile drawer component that's only visible on small screens
const MobileDrawer = ({ state, setState }) => {
  return (
    <Drawer placement='right' isOpen={state} size='xs'>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <VStack my='25px' align='flex-end'>
            {/* The close button for the mobile drawer */}
            <HStack mb='40px'>
              <IconButton
                size='md'
                variant='solid'
                bg='red'
                icon={<CloseIcon></CloseIcon>}
                onClick={() => {
                  setState(false);
                }}
              />
              <ColorModeSwitcher size='flex' />

              <Button
                onClick={() => {
                  window.location = "/login";
                }}
                variant='outline'
              >
                Login
              </Button>

              <Button
                onClick={() => {
                  window.location = "/signup";
                }}
                colorScheme='green'
              >
                SignUp
              </Button>
            </HStack>

            {/* The mobile navigation menu */}
            <HStack justify='space-between' spacing='20px' minW='full'>
              <HStack>
                <Icon as={HiHome} w='30px' h='30px' />

                <Link href='/'>
                  <Heading size='md'>House</Heading>
                </Link>
              </HStack>
              <HStack>
                <Icon as={HiUserGroup} w='30px' h='30px' />

                <Link href='/buddy'>
                  <Heading size='md'>Buddy</Heading>
                </Link>
              </HStack>
            </HStack>
          </VStack>

          <MobileFilterCard></MobileFilterCard>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Head;
