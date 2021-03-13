import React from "react";
import PropTypes from "prop-types";
import { Link as Navlink } from "react-router-dom";

import {
  Flex,
  Spacer,
  Center,
  Box,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";

const Navbar = (props) => {
  return (
    <Flex>
      <Flex p="4">
        <Center>
          <Heading as="h2" size="md" mr="8">
            Logo
          </Heading>

          <Navlink to="/home">
            <Link as="h3" size="sm">
              Home
            </Link>
          </Navlink>

          <Navlink to="/shop">
            <Link as="h3" size="sm" ml="3">
              Shop
            </Link>
          </Navlink>
        </Center>
      </Flex>
      <Spacer />
      <Box p="4">
        <Navlink to="/signin">
          <Button>sign in</Button>
        </Navlink>
        <Navlink to="/signup">
          <Button colorScheme="teal" variant="solid" ml="5">
            sign up
          </Button>
        </Navlink>
      </Box>
    </Flex>
  );
};

Navbar.propTypes = {};

export default Navbar;
