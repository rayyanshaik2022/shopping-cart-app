import {
  useDisclosure,
  Box,
  Flex,
  Heading,
  Divider,
  Stack,
  Checkbox,
  InputGroup,
  Button,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import ShopContent from "./ShopContent";
import { useEffect, useState } from "react";
import shopData from "../assets/data.json";

function Shop(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [maxPrice, setMaxPrice] = useState("");

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    // Simulate API Load
    setTimeout(() => {
      setData(shopData);
      setLoading(false);
    }, 500);
  }, []);

  let onChangeMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  return (
    <>
      <Navbar
        handleCartBtn={{
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose,
        }}
        defaultIndex="1"
        textColor="black"
        logoColor="orange.400"
      />
      <Box as="main" minH={"calc(100vh - 80px)"} bg={"gray.100"}>
        <Flex w={"100%"} h={"100%"}>
          <Box h={"100%"} minW={"240px"} flex={"1 300px"} p={6}>
            <Flex
              height={"100%"}
              width={"100%"}
              bg={"white"}
              borderRadius={12}
              boxShadow={"sm"}
              p={{ base: 6, md: 6 }}
              gap={4}
              flexDir={"column"}
            >
              <Heading as={"h3"} size={"md"}>
                Filter
              </Heading>
              <Divider />
              <Heading as={"h3"} size={"sm"}>
                Categories
              </Heading>
              <Stack pl={2} spacing={1}>
                <Checkbox>Shirts</Checkbox>
                <Checkbox>Pants</Checkbox>
                <Checkbox>Hats</Checkbox>
                <Checkbox>Sunglasses</Checkbox>
              </Stack>
              <Divider />
              <Heading as={"h3"} size={"sm"}>
                Price Range
              </Heading>
              <InputGroup>
                <InputLeftAddon>Max</InputLeftAddon>
                <Input
                  placeholder="$ 120"
                  type="number"
                  value={maxPrice}
                  onChange={onChangeMaxPrice}
                />
              </InputGroup>
              <Button colorScheme="orange">Set price</Button>
            </Flex>
          </Box>
          <Box
            h={"100%"}
            minW={"480px"}
            bg={""}
            flex={"1 calc(100vw - 300px)"}
            p={6}
          >
            <ShopContent shopData={data} loading={loading} addToCart={props.addToCart}/>
          </Box>
        </Flex>
      </Box>
      <CartDrawer
        disclosure={{
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose,
        }}
        cartItems={props.cartItems}
      />
    </>
  );
}

export default Shop;
