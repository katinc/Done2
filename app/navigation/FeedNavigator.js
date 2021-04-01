import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListingsScreen from "../screens/ListingsScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

import NoodlesScreen from "../screens/NoodlesScreen";
import Peanut from "../screens/PeanutScreen";
import Vege from "../screens/VegeScreen";
import Salad from "../screens/SaladScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="ListingDetail" component={ListingDetailsScreen} />

    <Stack.Screen name="Noodles" component={NoodlesScreen} />
    <Stack.Screen name="Peanut" component={Peanut} />
    <Stack.Screen name="Vege" component={Vege} />
    <Stack.Screen name="Salad" component={Salad} />
  </Stack.Navigator>
);

export default FeedNavigator;
