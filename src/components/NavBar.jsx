import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Flex, Icon, Image, Text } from "@chakra-ui/react";
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
      <Icon
        fill="white"
        cursor="pointer"
        as={FaShoppingBasket}
        w={30}
        h={30}
        onClick={openCart}
      />
    </Flex>
  );
};

export default NavBar;
