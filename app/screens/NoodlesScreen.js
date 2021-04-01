import React from "react";
import { View, Image, StyleSheet, Picker } from "react-native";

import colors from "../config/colors";
import Text from "../components/Text";
import Options from "../components/Options";
import TextInput from "../components/TextInput";
import AppButton from "../components/Button";
import { ScrollView } from "react-native-gesture-handler";

const noodleTypes = [{ name: "Indome" }, { name: "Spaghetti" }];
const bellPepper = [{ name: "Red" }, { name: "Green" }, { name: "Yellow" }];

function NoodlesScreen({ route }) {
  const listing = route.params;

  const state = {
    selectedLang: 0,
  };

  return (
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/indome3big.jpg")}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{listing.title}</Text>
          {/* <Text style={styles.price}>{listing.price}</Text> */}
          {/* <View style={styles.userContainer}>
            <ListItem
              image={require("../assets/mosh.jpg")}
              title="Mosh Hamedani"
              subTitle="5 Listings"
            />
          </View> */}
          <Text style={styles.subTitle}>Ingredients</Text>
          <View>
            <Options checkboxText="Indomie"></Options>
            <Options checkboxText="Carrot"></Options>
            <Options checkboxText="Bell Pepper (Red, Green, Yellow)"></Options>
            <Options checkboxText="Onion"></Options>
            <Options checkboxText="Sausage"></Options>
            <Options checkboxText="Eggs"></Options>
            <Options checkboxText="Chilly Powder"></Options>
            <Options checkboxText="Shredded Chicken"></Options>
          </View>
          <TextInput maxLength={255} name="title" placeholder="Comments" />
          <View style={styles.post}>
            <AppButton title="Submit" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 20,
    marginLeft: 10,
  },
});

export default NoodlesScreen;
