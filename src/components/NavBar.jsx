import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Badge, Box, Flex, Icon, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { FaShoppingBasket } from "@react-icons/all-files/fa/FaShoppingBasket";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

  return (
    <Flex
      background="#FFA8E2"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={GiHamburgerMenu}
        w={30}
        h={30}
        onClick={openMenu}
      />
      <Link to="/">
        <Image
          src="https://cdn.shopify.com/s/files/1/0603/5469/1288/files/Logologo_1.svg?v=1634339808"
          w={100}
        />
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={FaShoppingBasket}
          w={30}
          h={30}
          onClick={openCart}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default NavBar;
