import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { white } from "../utils/colors";

export default class MobileButton extends Component {
  render() {
    const { text, onPress, color, tcolor, size } = this.props;

    return (
      <View>
        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: color, color: tcolor, fontSize: size },
          ]}
          onPress={onPress}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    alignSelf: "stretch",
    alignItems: "center",
    padding: 10,
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: white,
  },
});
