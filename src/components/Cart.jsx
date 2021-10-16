import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { CloseIcon } from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Grid,
  Text,
  Flex,
  Image,
  Link,
  Box,
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } =
    useContext(ShopContext);

  return (
    <>
      <Drawer
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
        size="sm"
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart</DrawerHeader>

            <DrawerBody>
              {checkout.lineItems?.length ? (
                checkout.lineItems.map((item) => (
                  <Grid templateColumns="repeat(4, 1fr)" gap={1} key={item.id}>
                    <Flex alignItems="center" justifyContent="center">
                      <CloseIcon
                        cursor="pointer"
                        onClick={() => {
                          removeLineItem(item.id);
                        }}
                      />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Image src={item.variant.image.src} />
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Text>{item.title}</Text>
                    </Flex>
                    <Flex alignItems="center" justifyContent="center">
                      <Text>{item.variant.price}</Text>
                    </Flex>
                  </Grid>
                ))
              ) : (
                <Box w="100%" h="100%">
                  <Text
                    h="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    Your Cart is Empty!
                  </Text>
                </Box>
              )}
            </DrawerBody>

            {checkout.lineItems?.length ? (
              <DrawerFooter>
                <Button w="100%">
                  <Link w="100%" href={checkout.webUrl}>
                    Checkout
                  </Link>
                </Button>
              </DrawerFooter>
            ) : null}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
