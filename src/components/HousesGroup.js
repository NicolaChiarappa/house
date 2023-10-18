import {
  HStack,
  VStack,
  Stack,
  Flex,
  Box,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Button,
  IconButton,
  ButtonGroup,
  Select,
  AspectRatio,
  Highlight,
} from "@chakra-ui/react";
import { BsFillPinMapFill, BsCurrencyEuro } from "react-icons/bs";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { Icon } from "@chakra-ui/react";

//this is houses group component
const HousesGroupDesktop = () => {
  return (
    <VStack mr='5vw' my='10px' spacing='15px'>
      <MyCard n='1' price='€ 320' />
      <MyCard n='2' price='€ 320' />
      <MyCard n='3' price='€ 320' />
    </VStack>
  );
};

//this component defin filters bar
const Filter = () => {
  return (
    <Container
      minWidth='full'
      mt='20px'
      display={["none", "none", "none", "block"]}
    >
      <HStack justify='space-between' spacing='10px'>
        <Select variant='filled' icon={<Icon as={BsFillPinMapFill} />}>
          <option>Centro Storico</option>
          <option>Stazione</option>
          <option>Città Giardino</option>
        </Select>
        <Select variant='filled' icon={<Icon as={BsCurrencyEuro} />}>
          <option>Centro Storico</option>
          <option>Stazione</option>
          <option>Città Giardino</option>
        </Select>
        <Select variant='filled'>
          <option>Centro Storico</option>
          <option>Stazione</option>
          <option>Città Giardino</option>
        </Select>
        <Select variant='filled'>
          <option>Centro Storico</option>
          <option>Stazione</option>
          <option>Città Giardino</option>
        </Select>
      </HStack>
    </Container>
  );
};

//this is the sample of each house card on dashboard
const MyCard = ({ n, price }) => {
  return (
    <>
      <Container maxW='100%'>
        <Card size='md' my='15px' display={["none", "none", "none", "block"]}>
          <CardBody fontSize={["1.2vw", "1.2vw", "20px"]}>
            <Container maxW='100vw'>
              <HStack>
                <Container maxW='15vw' minW='15vw'>
                  <Image
                    src='https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
                    boxSize='13vw'
                    fit='cover'
                    borderRadius='5px'
                  ></Image>
                </Container>
                <Container minH='200px'>
                  <VStack spacing='25px' justify='space-between'>
                    <VStack align='flex-start'>
                      <Heading fontSize='2vw'>Via Cardinale maffi {n}</Heading>

                      <Text fontSize='1.2vw'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </Text>
                    </VStack>
                    <Container centerContent mt='25px'>
                      <ButtonGroup>
                        <Button bg='green'>Info</Button>
                      </ButtonGroup>
                    </Container>
                  </VStack>
                </Container>
              </HStack>
            </Container>
          </CardBody>
        </Card>
      </Container>

      {/*this component will render only on mobile screens*/}
      <Card display={["block", "block", "block", "none"]} padding='0px'>
        <CardBody py='15px' px='5px'>
          <Container minW='fit-content'>
            <VStack align='start' spacing='15px'>
              <Container centerContent padding='0px'>
                <Image
                  src='https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800'
                  boxSize='2xs'
                  fit='cover'
                  borderRadius='15px'
                />
              </Container>
              <Heading size='md'>Via Cardinale Maffi {n}</Heading>
              <HStack justify='space-between' minW='full'>
                <Text>
                  <Highlight
                    query={price}
                    styles={{
                      px: "2",
                      py: "1",
                      rounded: "full",
                      bg: "red.100",
                    }}
                  >
                    {price}
                  </Highlight>
                </Text>
                <Button
                  bg='green'
                  rightIcon={<ArrowForwardIcon></ArrowForwardIcon>}
                >
                  Info
                </Button>
              </HStack>
            </VStack>
          </Container>
        </CardBody>
      </Card>
    </>
  );
};

export default HousesGroupDesktop;
