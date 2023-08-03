import {
  Flex,
  Heading,
  Icon,
  Box,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  Button,
} from "@chakra-ui/react";
import { BsCartCheck } from "react-icons/bs";
import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Navbar(props) {
  let handleCartClick = () => {
    props.handleCartBtn.onOpen();
  };

  return (
    <Flex
      w={"100vw"}
      h={"80px"}
      bg={"transparent"}
      p={10}
      alignItems={"center"}
      justify={"space-between"}
      backdropFilter="auto"
      backdropBlur="8px"
    >
      <Box width={"180px"}>
        <Heading as="a" color={"orange.100"} href="/">
          LifeWear
        </Heading>
      </Box>

      <Box>
        <Tabs position="relative" variant="unstyled" size="lg">
          <TabList>
            <Tab
              color={"orange.100"}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            > 
              <ChakraLink as={ReactRouterLink} to="/">
                Home
              </ChakraLink>
            </Tab>
            <Tab
              color={"orange.100"}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            >
              <ChakraLink as={ReactRouterLink} to="/shop/">
                Categories
              </ChakraLink>
            </Tab>
            <Tab
              color={"orange.100"}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            >
              <ChakraLink as={ReactRouterLink} to="/shop/">
                Deals
              </ChakraLink>
            </Tab>
            <Tab
              color={"orange.100"}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            >
              <ChakraLink as={ReactRouterLink} to="/shop/">
                {"What's New"}
              </ChakraLink>
            </Tab>
          </TabList>
          <TabIndicator
            mt="0px"
            height="3px"
            bg="orange.300"
            borderRadius="1px"
          />
        </Tabs>
      </Box>

      <Box w={"180px"}>
        <Button
          leftIcon={<Icon as={BsCartCheck} />}
          colorScheme="orange"
          variant="solid"
          color={"white"}
          float={"right"}
          onClick={handleCartClick}
        >
          Cart
        </Button>
      </Box>
    </Flex>
  );
}

export default Navbar;
