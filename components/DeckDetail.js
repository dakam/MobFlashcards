import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import MobileButton from "./MobileButton";
import { connect } from "react-redux";
import { Card, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { white, red } from "../utils/colors";

class DeckDetail extends Component {
  state = {};

  render() {
    const { deck, navigation } = this.props;
    const Qnum = deck.questions.length;

    return (
      <View style={[styles.container]}>
        <View style={styles.titleContainer}>
          <Text style={{ fontSize: 32 }}>{deck.title}</Text>
          <Text style={styles.dCard}>
            {" "}
            <Text style={styles.dCardNum}>
              {Qnum}{" "}
              <Text style={styles.dCardTxt}>cards created for this deck </Text>
            </Text>
          </Text>

          <Button
            buttonStyle={{
              padding: 5,
              borderRadius: 10,
              borderColor: "#fff",
              backgroundColor: "#000",
              marginTop: 20,

              justifyContent: "center",
              size: 36,
              alignItems: "center",
            }}
            icon={<Icon name="arrow-right" size={15} color="white" />}
            disabled={Qnum === 0}
            type="solid"
            onPress={() => navigation.navigate("Quiz", { deckId: deck.title })}
            title="Enter Quiz"
          />
          <MobileButton
            text="Add New Card"
            color={red}
            tcolor={red}
            size={12}
            onPress={() =>
              navigation.navigate("AddCard", { deckId: deck.title })
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 22,
    marginTop: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 22,
  },
  buttonStyl: {
    borderRadius: 0,
    marginLeft: 0,
    marginTop: 224,
    marginRight: 0,
    marginBottom: 20,
  },

  titleContainer: {
    marginTop: 100,
    marginBottom: 100,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  deckName: {
    fontSize: 32,
  },
  dCard: {
    marginBottom: 20,
    marginTop: 20,
  },
  dCardTxt: {
    fontSize: 18,
    color: "gray",
  },
  dCardNum: {
    fontSize: 32,
    color: "green",
  },
});

const mapStateToProps = (state, { route }) => {
  const { deckTitle } = route.params;
  const deck = state[deckTitle];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(DeckDetail);
