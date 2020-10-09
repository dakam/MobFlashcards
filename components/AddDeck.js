import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addDeck } from "../actions/index";
import MobileButton from "./MobileButton";
import { red, blue, white, pupple } from "../utils/colors";

class AddDeck extends Component {
  state = {
    name: "",
  };

  handleOnSubmit = () => {
    const { name } = this.state;
    if (this.state.name === "") {
      alert("Please enter Deck name");
      return;
    }
    const { dispatch, navigation } = this.props;
    dispatch(addDeck(this.state.name));
    navigation.navigate("DeckDetail", { deckTitle: name });
    this.setState({ name: "" });
  };

  render() {
    const { name } = this.state;
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={styles.headerText}>Title of the Deck</Text>
        <TextInput
          style={styles.input}
          placeholder="Deck Name"
          value={name}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <MobileButton
          text="Submit"
          color={red}
          tcolor={red}
          size={36}
          onPress={this.handleOnSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 300,
  },
  headerText: {
    fontSize: 32,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    alignSelf: "stretch",
    marginTop: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

export default connect()(AddDeck);
