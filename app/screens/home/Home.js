import React from "react";
import { View } from "react-native";
import { Header, Screen } from "../../components/";
import {
  BestSeller,
  BestSellerItem,
  ListPopularDeals,
  Title,
} from "./components";
import styles from "./styles/Home";

export function Home() {
  return (
    <Screen scroll>
      <View style={styles.CONTAINER}>
        <Header title="Welcome" />
        <BestSeller />
        <Title
          title="Popular Deals"
          action_text="See All"
          onPress={() => console.log("Sell All was clicked!")}
        />
        <ListPopularDeals />
        <Title
          title="Best Seller"
          action_text="See All"
          onPress={() => console.log("Sell All was clicked!")}
        />
        <View style={styles.BEST_SELLER_ITEM}>
          <BestSellerItem name="Liva's Shop" />
          <BestSellerItem name="Eric Book" />
          <BestSellerItem name="Shop Center" />
          <BestSellerItem name="Sweet Home" />
        </View>
      </View>
    </Screen>
  );
}
