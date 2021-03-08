import React from "react";
import PropTypes from "prop-types";
import { Container, Box } from "@chakra-ui/react";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Container
      maxW="container.xl"
      display="flex"
      flexDirection="column"
      minH="100vh"
    >
      <Navbar />

      <Box flex="1">{children}</Box>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {};

export default Layout;
