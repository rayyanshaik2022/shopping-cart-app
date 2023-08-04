import {
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";

import { MinusIcon, AddIcon } from "@chakra-ui/icons";

function CartItem(props) {
  return (
    <Box w={"100%"} h={"140px"} bg={"white"} boxShadow={"lg"} borderRadius={12}>
      <Flex w={"100%"} h={"100%"}>
        <Image
          borderLeftRadius={12}
          objectFit={"cover"}
          h={"100%"}
          w={"40%"}
          mt={"1px"}
          src={props.image}
        />
        <Flex flexDir={"column"} p={4}>
          <Heading size={"sm"}>{props.name}</Heading>
          <Text>{props.brand}</Text>
          <Spacer />

          <Flex alignItems={"center"}>
            <Heading size={"sm"}>${props.price}</Heading>
            <Spacer />
            <Flex gap={1}>
              <IconButton
                colorScheme="orange"
                size="xs"
                icon={<MinusIcon />}
                onClick={props.removeItemCount}
              />
              <Text>{props.count}</Text>
              <IconButton
                colorScheme="orange"
                size="xs"
                icon={<AddIcon />}
                onClick={props.addItemCount}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CartItem;
