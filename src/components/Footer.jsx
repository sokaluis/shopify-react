import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Text, VStack, Image } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box background="#FFA8E2">
      <Grid
        gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        color="white"
        fontWeight="bold"
      >
        <Image src="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/Bath_Bomb_-_Product-5.jpg?v=1634339323" />
        <VStack p="2rem">
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Blue Berry</Link>
          <Link to="/">The Yellow Mellow</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainbility</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="white"
          w="100%"
          borderTop="1px solid white"
          p="1rem"
        >
          Copyright
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
