import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";

import Text from "./Text";
import colors from "../config/colors";
import Checkbox from "expo-checkbox";

function Options({ checkboxText }) {
  const [isChecked, setChecked] = useState(true);
  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color="#fc5185"
      />
      <Text style={styles.paragraph}>{checkboxText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 20,
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
  },
  paragraph: {
    fontSize: 20,
  },
  checkbox: {
    margin: 5,
  },
});

export default Options;
