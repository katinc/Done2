import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import ListingsScreen from "./ListingsScreen";
import { ScrollView } from "react-native-gesture-handler";
import Options from "../components/Options";

import ListingEditScreen from "./ListingEditScreen";
import TextInput from "../components/TextInput";
import AppButton from "../components/Button";
import CategoryPickerItem from "../components/CategoryPickerItem";
import AppPicker from "../components/Picker";
import { CheckBox } from "native-base";

function PeanutScreen({ route }) {
  const listing = route.params;
  return (
    // <View>
    //   <Image style={styles.image} source={listing.image} />
    //   <View style={styles.detailsContainer}>
    //     <Text style={styles.title}>{listing.title}</Text>
    //     <Text style={styles.price}>{listing.price}</Text>
    //     <View style={styles.userContainer}>
    //       <ListItem
    //         image={require("../assets/mosh.jpg")}
    //         title="Mosh Hamedani"
    //         subTitle="5 Listings"
    //       />
    //     </View>
    //   </View>
    // </View>
    <ScrollView>
      <View>
        <Image
          style={styles.image}
          source={require("../assets/peanutsoup1.jpg")}
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
            <Options checkboxText="Peanut Paste"></Options>
            <Options checkboxText="Fish"></Options>
            <Options checkboxText="Meat (Chicken, Pork)"></Options>
            <Options checkboxText="Pepper"></Options>
            <Options checkboxText="Tomatoes"></Options>
            <Options checkboxText="Onion"></Options>
          </View>
          <TextInput maxLength={255} name="title" placeholder="Comments" />
          <AppButton title="Submit" />
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
});

export default PeanutScreen;