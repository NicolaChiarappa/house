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
  Radio,
  RadioGroup,
  Switch,
  AspectRatio,
} from "@chakra-ui/react";

import { useState } from "react";

const FilterCard = () => {
  return (
    <VStack my='10px'>
      {/* Card container */}
      <Card my='15px'>
        <CardBody>
          <VStack spacing='15px'>
            {/* Map container */}
            <Container
              maxW='20vw'
              maxH='fit-content'
              minH='fit-content'
              minW='20vw'
            >
              <Text fontWeight='bold' fontSize='xs'>
                View on map
              </Text>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src='https://www.google.com/maps/vt/data=MIlhESNu4rZlni7tV-S2H9nYELJuIQZ3Iq5boyhtUw62AusPPDQwQ8D8fJc5lbOmU8mUUFe1g88BBMsLTDrOzUs06RqUJseXuNEoz5tNfXDZWoKpAV7uFTqcpMAFZynFMO8UY9bgesQVmozkYzG9B3JNxkWGFahRSxTXWCd1IR9LAsm4QY_rSfoJCz2hbhEPUjG-dmXCklzo-j8MByMcWT_Q5i3OJohabgICpO2AsgrE-3e8sjbXnnaoamN4lwXMzhVOE-IV-nouXFlMVXKupRRiBWSnYCe3AAxpPmsU7oUKmSjmWMbr2HobI6nMu3JX0T-unxHEBn8K'
                  objectFit='cover'
                />
              </AspectRatio>
            </Container>
            <Container>
              <Text fontWeight='bold' fontSize='lg'>
                Area
              </Text>
              <Select placeholder='City center'></Select>
            </Container>
            {/* Price container */}
            <Container>
              <Text fontWeight='bold' fontSize='lg'>
                Price
              </Text>
              <HStack>
                <Select placeholder='Min'>
                  <option value='0'>200</option>
                  <option value='1'>300</option>
                  <option value='3'>400</option>
                  <option value='4'>500</option>
                </Select>
                <Select placeholder='Max'>
                  <option value='0'>300</option>
                  <option value='1'>400</option>
                  <option value='3'>500</option>
                  <option value='4'>600 </option>
                </Select>
              </HStack>
              <HStack mt='5px'>
                <Switch id='Bills included' />
                <Text>Bills included</Text>
              </HStack>
            </Container>
            {/* Roommates container */}
            <Container>
              <Text fontWeight='bold' fontSize='lg'>
                Rommates
              </Text>
              <RadioGroup>
                <VStack align='start'>
                  <Radio value='1'>1</Radio>
                  <Radio value='2'>2</Radio>
                  <Radio value='3'>3 or more</Radio>
                </VStack>
              </RadioGroup>
            </Container>
            {/* Accessories container */}
            <Container>
              <VStack align='start'>
                <Accessory acc='Garden' />
                <Accessory acc='Terrace' />
                <Accessory acc='Microwave' />
                <Accessory acc='Dishwasher' />
              </VStack>
            </Container>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  );
};

// Componente per gli accessori
const Accessory = ({ acc }) => {
  return (
    <HStack>
      <Switch />
      <Box minW='90px'>
        <Text>{acc}</Text>
      </Box>
    </HStack>
  );
};

export default FilterCard;
