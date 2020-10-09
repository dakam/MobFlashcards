import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import MobileButton from "./MobileButton";
import { darkBlue, white, red, green, ngreen } from "../utils/colors";

class TakeQuiz extends Component {
  state = {
    side: "question",
    currentQtn: 0,
    correctAns: 0,
    incorrectAns: 0,
  };

  handleMyAnswer = (incoming) => {
    this.setState(
      {
        side: "question",
        [incoming]: this.state[incoming] + 1,
      },
      () => {
        const totalQuestions = this.props.questions.length;
        const { currentQtn, correctAns } = this.state;

        if (currentQtn === totalQuestions - 1) {
          this.setState({
            side: "question",
            currentQtn: 0,
            correctAns: 0,
            incorrectAns: 0,
          });

          this.props.navigation.navigate("QuizResult", {
            correctAns,
            totalQuestions,
            deckId: this.props.deckId,
          });
        } else {
          this.setState({ currentQtn: currentQtn + 1 });
        }
      }
    );
  };

  render() {
    const { side, currentQtn } = this.state;
    const { questions } = this.props;
    const totalQuestions = questions.length;

    if (totalQuestions === 0) {
      return (
        <View style={[styles.container, { marginTop: 24 }]}>
          <Text>No Deck Cards found </Text>
        </View>
      );
    }

    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <Text style={{ marginBottom: 8 }}>
          {currentQtn + 1}/{totalQuestions}
        </Text>
        <View style={styles.card}>
          <View style={styles.cardTitle}>
            <Text style={{ color: white, fontSize: 16 }}>
              {side === "question" ? "Question Mode" : "Answer Mode"}
            </Text>
          </View>
          <Text style={styles.questionText}>
            {side === "question"
              ? questions[currentQtn].question
              : questions[currentQtn].answer}
          </Text>
        </View>

        <MobileButton
          text={side === "question" ? "Answer" : "Question"}
          color={darkBlue}
          tcolor={red}
          size={36}
          onPress={() =>
            this.setState({ side: side === "question" ? "answer" : "question" })
          }
        />
        <MobileButton
          text="Correct"
          onPress={() => this.handleMyAnswer("correctAns")}
          color={green}
          tcolor={ngreen}
          size={36}
        />
        <MobileButton
          text="Incorrect"
          onPress={() => this.handleMyAnswer("incorrectAns")}
          color={red}
          tcolor={red}
          size={36}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    margin: 24,
  },
  card: {
    borderWidth: 1,
    alignSelf: "center",
    backgroundColor: ngreen,
  },
  cardTitle: {
    alignItems: "center",
    backgroundColor: red,
    padding: 6,
  },
  questionText: {
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    height: 300,
  },
});

const mapStateToProps = (state, { route }) => {
  const { deckId } = route.params;
  return {
    deckId,
    questions: state[deckId].questions,
  };
};

export default connect(mapStateToProps)(TakeQuiz);
