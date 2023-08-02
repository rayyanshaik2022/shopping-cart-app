import { Box, Flex, Heading, Highlight, Button } from "@chakra-ui/react";
import HomeBg from "../assets/home_bg.jpg";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Box
        w={"100vw"}
        minH={"calc(100vh)"}
        bgImage={HomeBg}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Navbar />
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
              <Button size="lg" colorScheme="orange" >Shop Apparel</Button>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
