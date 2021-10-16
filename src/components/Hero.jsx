import React from "react";
import { Box, Image, Text, Button, Center } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box background="#FFA8E2" w="100%" position="relative" h="70vh">
      <Image
        src="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/Bath_Bomb_-_Product-4.png?v=1634382297"
        h="100%"
        m="auto"
        objectFit="contain"
        objectPosition={["top", "center"]}
      />
      <Text
        className="scale-up-center"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Bath Bombs
      </Text>
      <Center>
        <Button
          position="absolute"
          _hover={{ opacity: "70%" }}
          w="10rem"
          backgroundColor="#FF38BD"
          color="white"
          bottom="10%"
        >
          Shop Now!
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
