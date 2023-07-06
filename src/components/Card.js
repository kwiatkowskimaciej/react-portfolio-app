import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  const color = 'black'
  return (
    <HStack>
      <Box maxW='420px' bg="white" p='0' borderRadius='xl'>
        <Image
          src={imageSrc.substring(1)}
          alt={title}
          borderRadius='xl'
          objectFit='cover'
        />
        <VStack p="4" align="left" spacing={4}>
          <Heading as='h5' size='sm' color={color}>
            {title}
          </Heading>
          <Text fontSize='xs' color="gray.700">
            {description}
          </Text>
          <Heading as='h6' size='xs' color={color}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Heading>
        </VStack>
      </Box>

    </HStack>
  );
};

export default Card;
