import { Box, Image, Flex, Heading, Text, Spacer } from "@chakra-ui/react";

function CartItem(props) {
  return (
    <Box w={"100%"} h={"140px"} bg={"white"} boxShadow={"lg"} borderRadius={12}>
      <Flex w={"100%"} h={"100%"}>
        <Image borderLeftRadius={12} objectFit={"cover"} h={"100%"} w={"40%"} mt={"1px"} src={props.image} />
        <Flex flexDir={"column"} p={4}>
            <Heading size={"sm"}>{props.name}</Heading>
            <Text>{props.brand}</Text>
            <Spacer />
            <Heading size={"md"}>${props.price}</Heading>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CartItem;
