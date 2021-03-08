import React from "react";
import PropTypes from "prop-types";
import { Link as Navlink } from "react-router-dom";
import { Link } from "@chakra-ui/react"

import { Flex, Spacer, Center, Box, Heading, Button } from "@chakra-ui/react";

const Navbar = (props) => {
  return (
    <Flex>
      <Flex p="4">
        <Center>
          <Heading as="h2" size="md" mr="6">
            Logo
          </Heading>

          <Heading as="h2" size="sm">
            Home
          </Heading>

          <Heading as="h2" size="sm" ml="4">
            Shop
          </Heading>
        </Center>
      </Flex>
      <Spacer />
      <Box p="4">
        <Navlink to='/signin'>
          <Link>sign in</Link>
          
        </Navlink>
        <Navlink to='/signup'>
        <Link ml='5'>sign up</Link>
        </Navlink>
      </Box>
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
