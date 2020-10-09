import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MobileButton from "./MobileButton";
import { white, red, ngreen, green } from "../utils/colors";
import {
  setLocalNotification,
  clearLocalNotification,
} from "../utils/notifications";

export default class QuizDetails extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  render() {
    const { navigation } = this.props;

    const { correctAns, totalQuestions, deckId } = this.props.route.params;

    const percentage = ((correctAns / totalQuestions) * 100).toFixed(0);

    return (
      <View style={[styles.container, { marginTop: 20 }]}>
        <Text style={styles.headerText}>Your Quiz Results</Text>
        <View style={styles.scoreCard}>
          <Text style={styles.percentage}>{percentage}%</Text>
          <Text style={styles.scoreText}>
            {correctAns} correct answers out of {totalQuestions}
          </Text>
        </View>
        <MobileButton
          text="Restart Quiz"
          color={red}
          tcolor={red}
          size={12}
          onPress={() => navigation.navigate("Quiz", { deckId })}
        />
        <MobileButton
          text="Back to Deck"
          color={red}
          tcolor={red}
          size={12}
          onPress={() => navigation.navigate("DeckDetail", { deckId })}
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
    backgroundColor: green,
    margin: 24,
  },
  headerText: {
    fontSize: 29,
    textAlign: "center",
    color: white,
  },
  scoreCard: {
    marginBottom: 40,
    marginTop: 40,
    backgroundColor: ngreen,
    borderWidth: 1,
    alignSelf: "stretch",
    flexBasis: 200,
    justifyContent: "center",
  },

  scoreText: {
    fontSize: 20,
    textAlign: "center",

    color: white,
  },
  percentage: {
    fontSize: 48,
    textAlign: "center",
  },
});
