import {
  useDisclosure,
  Box,
  Flex,
  Heading,
  Text,
  Divider,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";

function Shop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Box as="main" h={"calc(100vh - 80px)"} bg={"gray.100"}>
        <Flex w={"100%"} h={"100%"}>
          <Box h={"100%"} minW={"240px"} flex={"1 300px"} p={6}>
            <Flex
              height={"100%"}
              width={"100%"}
              bg={"white"}
              borderRadius={12}
              boxShadow={"sm"}
              p={{base: 6, md: 6}}
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
                <Checkbox>
                  Shirts
                </Checkbox>
                <Checkbox>
                  Pants
                </Checkbox>
                <Checkbox>
                  Hats
                </Checkbox>
                <Checkbox>
                  Sunglasses
                </Checkbox>
              </Stack>
            </Flex>
          </Box>
          <Box
            h={"100%"}
            minW={"480px"}
            bg={""}
            flex={"1 calc(100vw - 300px)"}
          ></Box>
        </Flex>
      </Box>
      <CartDrawer
        disclosure={{
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose,
        }}
      />
    </>
  );
}

export default Shop;
