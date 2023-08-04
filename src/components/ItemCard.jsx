import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Spacer,
  Stack,
  Button,
  Skeleton,
  SkeletonText,
  useToast
} from "@chakra-ui/react";

function ItemCard(props) {

    const toast = useToast()
    

    let onClickAddToCart = () => {
        toast({
            title: 'Item added to cart.',
            description: `${props.name} has been added to your cart.`,
            status: 'success',
            duration: 4000,
            isClosable: true,
          })
        props.addToCart(props.id, props.brand, props.name, props.price, props.image)()
    }


  if (props.isLoading) {
    return (
      <Box
        w={"300px"}
        h={"420px"}
        bg={"white"}
        borderRadius={24}
        boxShadow={"md"}
      >
        <Skeleton h={"70%"} w={"100%"} borderTopRadius={24}>
          
        </Skeleton>
        <SkeletonText m={6} spacing={4}></SkeletonText>
      </Box>
    );
  }
  return (
    <Box
      w={"300px"}
      h={"420px"}
      bg={"white"}
      borderRadius={24}
      boxShadow={"md"}
    >
      <Image
        h={"70%"}
        w={"100%"}
        objectFit={"cover"}
        overflow={"hidden"}
        borderTopRadius={24}
        src={props.image}
      />
      <Box m={4}>
        <Stack>
          <Heading size={"md"}>{props.name}</Heading>
          <Text>{props.brand}</Text>
          <Spacer />
          <Flex alignItems={"center"} justifyContent={"space-between"} mt={-2}>
            <Heading size={"md"}>${props.price}</Heading>
            <Button size={"sm"} onClick={onClickAddToCart}>Add to cart</Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

export default ItemCard;
