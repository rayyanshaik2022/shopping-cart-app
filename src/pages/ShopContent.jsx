import { Grid } from "@chakra-ui/react";
import ItemCard from "../components/ItemCard";

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function ShopContent(props) {
  if (props.loading) {
    return (
      <Grid
        templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
        width={"100%"}
        p={{ base: 6, md: 6 }}
        pb={0}
        gap={2}
        rowGap={8}
        justifyItems={"center"}
      >
        {arr.map((i) =>
        <ItemCard key={i} isLoading={true} />) }
      </Grid>
    );
  }
  return (
    <Grid
      templateColumns={"repeat(auto-fill, minmax(300px, 1fr))"}
      width={"100%"}
      p={{ base: 6, md: 6 }}
      pb={0}
      gap={2}
      rowGap={8}
      justifyItems={"center"}
    >
      {props.shopData.shirts.map((item) => (
        <ItemCard {...item} key={item.id} addToCart={props.addToCart}/>
      ))}
    </Grid>
  );
}

export default ShopContent;
