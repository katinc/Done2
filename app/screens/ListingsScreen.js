import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "Noodles",
    price: 20,
    image: require("../assets/indomie4.jpg"),
    screenName: "Noodles",
  },
  {
    id: 2,
    title: "Peanut Soup",
    price: 100,
    image: require("../assets/peanutsoup3.jpeg"),
    screenName: "Peanut",
  },
  {
    id: 3,
    title: "Vegetable Stew",
    price: 50,
    image: require("../assets/vegeStew3.jpg"),
    screenName: "Vege",
  },
  {
    id: 4,
    title: "Salad",
    price: 30,
    image: require("../assets/salad2.jpg"),
    screenName: "Salad",
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"from " + "Ghc" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(item.screenName, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
