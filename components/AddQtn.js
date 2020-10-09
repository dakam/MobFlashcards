import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { addCardToDeck } from "../actions/index";
import MobileButton from "./MobileButton";
import { red, white, blue } from "../utils/colors";
import { Divider } from "react-native-paper";

class AddQtn extends Component {
  state = {
    question: "",
    answer: "",
  };

  handleSubmit = () => {
    const { question, answer } = this.state;
    if (question === "" || answer === "") {
      alert("Invalid input.");
      return;
    }

    const { dispatch, route, navigation } = this.props;
    const deckId = route.params.deckId;

    dispatch(addCardToDeck(deckId, { question, answer }));
    navigation.navigate("DeckDetail", { deckTitle: deckId });
  };

  render() {
    const { dispatch, route, navigation } = this.props;
    const deckId = route.params.deckId;
    const DID = deckId + " Deck";
    const { question, answer } = this.state;

    return (
      <View style={[styles.container, { marginTop: 28 }]}>
        <Text style={styles.headerText2}>{DID}</Text>
        <Divider />
        <Text style={styles.headerText}>Add a new card</Text>
        <TextInput
          style={styles.input}
          placeholder={"Question"}
          value={question}
          onChangeText={(text) => this.setState({ question: text })}
        />
        <TextInput
          style={styles.input}
          placeholder={"Answer"}
          value={answer}
          onChangeText={(text) => this.setState({ answer: text })}
        />
        <MobileButton
          text="Enter"
          color={red}
          tcolor={red}
          size={36}
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    flexBasis: 200,
  },
  headerText: {
    fontSize: 22,
    textAlign: "center",
  },
  headerText2: {
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

export default connect()(AddQtn);
