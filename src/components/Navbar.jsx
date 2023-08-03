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
import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();

  let routeIndex = (index) => {
    if (index == 0) {
      navigate("/");
    } else if (index == 1) {
      navigate("/shop/");
    }
  };

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
        <Heading as="a" color={props.logoColor} href="/">
          LifeWear
        </Heading>
      </Box>

      <Box>
        <Tabs
          position="relative"
          variant="unstyled"
          size="lg"
          defaultIndex={props.defaultIndex}
          onChange={(index) => routeIndex(index)}
        >
          <TabList>
            <Tab
              color={props.textColor}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            >
              Home
              {/* <ChakraLink as={ReactRouterLink} to="/">
                Home
              </ChakraLink> */}
            </Tab>
            <Tab
              color={props.textColor}
              fontSize={20}
              _selected={{ fontWeight: "600" }}
            >
              Shop
              {/* <ChakraLink as={ReactRouterLink} to="/shop/">
                Shop
              </ChakraLink> */}
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
