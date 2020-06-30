import React, { Component } from "react";
import { Text, View, Dimensions, StyleSheet, FlatList } from "react-native";

import Carousel, { Pagination } from "react-native-snap-carousel"; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from "../../../utils/animations";
import PopularDealsItem from "./PopularDealsItem";
import color from "../../../theme/color";
import { vertical } from "../../../theme/responsive";

const SLIDER_WIDTH = Dimensions.get("window").width;
// const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
// const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

const DATA = [
  {
    bg: require("../images/bg-purple.png"),
    img: require("../images/head-phone-purple.png"),
    price: "250$",
    title: "The NBA Collection",
    key: 0,
  },
  {
    bg: require("../images/bg-yellow.png"),
    img: require("../images/head-phone-yellow.png"),
    price: "120$",
    title: "Desert Sand",
    key: 1,
  },
  {
    bg: require("../images/bg-green.jpg"),
    img: require("../images/head-phone-green.png"),
    price: "100$",
    title: "CryStal Blue",
    key: 2,
  },
];

export class ListPopularDeals extends Component {
  state = {
    index: 1,
  };

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);
  }

  _renderItem({ item }) {
    return (
      <PopularDealsItem
        backgroundImg={item.bg}
        img={item.img}
        price={item.price}
        title={item.title}
      />
    );
  }

  get pagination() {
    const { index } = this.state;
    return (
      <Pagination
        dotsLength={3}
        activeDotIndex={index}
        containerStyle={{
          // backgroundColor: "rgba(0, 0, 0, 0.4)",
          paddingBottom: vertical(26),
          padding: 0,
          marginVertical: -20,
        }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 5,
          backgroundColor: color.purple,
          margin: 0,
        }}
        inactiveDotStyle={{
          backgroundColor: "#d8d8d8",
        }}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
      />
    );
  }

  render() {
    return (
      <View>
        <Carousel
          // ref={(c) => (this.carousel = c)}
          data={DATA}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={120}
          itemHeight={120}
          containerCustomStyle={styles.carouselContainer}
          onSnapToItem={(index) => this.setState({ index })}
          // scrollInterpolator={scrollInterpolator}
          // slideInterpolatedStyle={animatedStyles}
          // useScrollView={true}
          firstItem={1}
        />
        {this.pagination}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 2,
  },
});
