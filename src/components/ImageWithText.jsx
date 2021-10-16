import React from "react";
import { Box, Flex, Text, Button, Image, Heading } from "@chakra-ui/react";

const ImageWithText = ({ reverse, image, heading, text }) => {
  const reverseSection = !!reverse ? "row-reverse" : "row";
  return (
    <Box>
      <Flex flexDirection={["column", reverseSection]} w="100%">
        <Image src={image} objectFit="cover" w={["100%", "50%"]} />
        <Flex
          w={["100%", "50%"]}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading p="2rem">{!!heading && heading}</Heading>
          <Text p="2rem">{!!text && text}</Text>
          <Button
            _hover={{ opacity: "70%" }}
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
          >
            Buy Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ImageWithText;
