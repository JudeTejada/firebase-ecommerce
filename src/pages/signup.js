import { useState } from "react";
import PropTypes from "prop-types";
import { Link as Navlink } from "react-router-dom";
import {
  Container,
  Box,
  Heading,
  Input,
  FormLabel,
  Center,
  Divider,
  Button,
  Text,
  FormControl,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const SignupPage = (props) => {
  const [show, setShow] = useState(false);
  return (
    <Container
      maxW="container.sm"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      minHeight="80vh"
    >
      <Box padding="8" border="1px" borderColor="gray.200" width="100%">
        <Center>
          <Heading>Sign up</Heading>
        </Center>
        <FormControl id="email" mt="5">
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl mt="5">
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Box display="flex" alignItems="flex-end" justifyContent="flex-end">
          <Button mt="5" colorScheme="teal" variant="solid">
            Sign up
          </Button>
        </Box>

        <Divider mt="6" />
        <Box display="flex" alignItems="center" justifyContent="center" p="5">
          <Text>Already have an account?</Text>
          <Navlink to="/signin">
            <Button ml="2">Login</Button>
          </Navlink>
        </Box>
      </Box>
    </Container>
  );
};

SignupPage.propTypes = {};

export default SignupPage;
