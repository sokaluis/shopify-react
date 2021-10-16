import React, { useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import { Box, Grid, Text, Image } from "@chakra-ui/react";
import Hero from "../components/Hero";
import ImageWithText from "../components/ImageWithText";
import RichText from "../components/RichText";

const Home = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products || products === []) return <div>Loading...</div>;

  return (
    <Box className="Home">
      <Hero />
      <RichText
        heading="Your relaxation you've been waiting for"
        text="Our bath boombs guarantee a fun, relaxing and colorful night"
      />
      <Grid templateColumns="repeat(3, 1fr)">
        {products.map((product) => (
          <Box
            _hover={{ opacity: "80%" }}
            textAlign="center"
            key={product.id}
            position="relative"
          >
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Image src={product.images[0].src} />
              <Text position="absolute" bottom="15%" w="100%" fontWeight="bold">
                {product.title}
              </Text>
              <Text position="absolute" bottom="5%" w="100%" color="gray.500">
                {product.variants[0].price}
              </Text>
            </Link>
          </Box>
        ))}
      </Grid>
      <RichText heading="Treat yourself" />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/premium-bath-bombs.jpg?v=1634339322"
        heading="Heading"
        text="Entrepreneurs don’t need massive factories like the ones Lush owns to compete in this market. Bath bombs are relatively inexpensive and easy to make, which means anyone with a bit of time and drive can profit from the craze. Many bath bomb entrepreneurs start by making small batches of homemade products, and then transition to using a manufacturer or dropshipper when their business begins to grow. Creating an online-first business also cuts down on overhead expenses since you don’t need to invest in all the fixed costs of running a stall or storefront."
      />
      <ImageWithText
        reverse
        image="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/bath-bomb-sphere.jpg?v=1634339323"
        heading="Heading"
        text="Entrepreneurs don’t need massive factories like the ones Lush owns to compete in this market. Bath bombs are relatively inexpensive and easy to make, which means anyone with a bit of time and drive can profit from the craze. Many bath bomb entrepreneurs start by making small batches of homemade products, and then transition to using a manufacturer or dropshipper when their business begins to grow. Creating an online-first business also cuts down on overhead expenses since you don’t need to invest in all the fixed costs of running a stall or storefront."
      />
      <ImageWithText
        image="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/bath-bomb-and-candle.jpg?v=1634339322"
        heading="Heading"
        text="Entrepreneurs don’t need massive factories like the ones Lush owns to compete in this market. Bath bombs are relatively inexpensive and easy to make, which means anyone with a bit of time and drive can profit from the craze. Many bath bomb entrepreneurs start by making small batches of homemade products, and then transition to using a manufacturer or dropshipper when their business begins to grow. Creating an online-first business also cuts down on overhead expenses since you don’t need to invest in all the fixed costs of running a stall or storefront."
      />
    </Box>
  );
};

export default Home;
