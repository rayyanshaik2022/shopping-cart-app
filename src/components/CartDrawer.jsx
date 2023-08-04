import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Flex
} from "@chakra-ui/react";
import { useRef } from "react";

import CartItem from "./CartItem";

function CartDrawer(props) {
  const { isOpen, onClose } = props.disclosure;
  const btnRef = useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"gray.50"}>
          <DrawerCloseButton />
          <DrawerHeader>Your Cart</DrawerHeader>

          <DrawerBody>
            <Flex flexDir={"column"} gap={4}>
              {Object.keys(props.cartItems).map((key) => (
                <CartItem
                  {...props.cartItems[key]}
                  key={key}
                  removeItemCount={props.removeItemCount(key)}
                  addItemCount={props.addItemCount(key)}
                />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="orange">Checkout</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default CartDrawer;
