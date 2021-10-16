import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from "@chakra-ui/react";

const ProductPage = () => {
  const { handle } = useParams();
  const { fetchProductsWithHandle, addItemToCheckout, product } =
    useContext(ShopContext);

  useEffect(() => {
    fetchProductsWithHandle(handle);
  }, [fetchProductsWithHandle, handle]);

  if (!product.title) return <>Loading...</>;

  return (
    <Box p="2rem">
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} m="auto">
        <Flex justifyContent="center" alignItems="center">
          <Image src={product.images[0].src} />
        </Flex>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          px="2rem"
        >
          <Heading pb="2rem">{product.title}</Heading>
          <Text pb="2rem" fontWeight="bold">
            {product.variants[0].price}
          </Text>
          <Text pb="2rem" color="gray.500">
            {product.description}
          </Text>
          <Button
            onClick={() => {
              addItemToCheckout(product.variants[0].id, 1);
            }}
            _hover={{ opacity: "70%" }}
            w="10rem"
            backgroundColor="#FF38BD"
            color="white"
          >
            Add to Cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ProductPage;
