import {
  Box,
  Flex,
  Heading,
  Highlight,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import HomeBg from "../assets/home_bg.jpg";
import Navbar from "../components/Navbar";
import CartDrawer from "../components/CartDrawer";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Box
        w={"100vw"}
        minH={"calc(100vh)"}
        bgImage={HomeBg}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Navbar
          handleCartBtn={{
            isOpen: isOpen,
            onOpen: onOpen,
            onClose: onClose,
          }}
          defaultIndex="0"
          textColor="orange.100"
          logoColor="orange.100"
        />
        <Flex
          width={"100vw"}
          height={"calc(100vh - 80px)"}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={12}
        >
          <Flex
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={-48}
          >
            <Flex
              px={24}
              py={16}
              backdropFilter="auto"
              backdropBlur="8px"
              borderRadius={48}
              flexDir={"column"}
              alignItems={"center"}
              gap={16}
            >
              <Heading size={"3xl"} textAlign={"center"} color={"orange.100"}>
                <Highlight query="Stylish" styles={{ color: "yellow.200" }}>
                  Shop for Stylish
                </Highlight>
                <br />
                <Highlight query="Practical" styles={{ color: "yellow.200" }}>
                  & Practical Clothes
                </Highlight>
              </Heading>
              <Button size="lg" colorScheme="orange" onClick={() => navigate("/shop/")}>
                Shop Apparel
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <CartDrawer
        disclosure={{
          isOpen: isOpen,
          onOpen: onOpen,
          onClose: onClose,
        }}
        cartItems={props.cartItems}
        removeItemCount={props.removeItemCount} addItemCount={props.addItemCount}
      />
    </>
  );
}

export default Home;
