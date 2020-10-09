import * as React from "react";
import { List } from "react-native-paper";
import { white, red, darkBlue } from "../utils/colors";
import { StyleSheet } from "react-native";

export default class DlistItemSingle extends React.Component {
  render() {
    const { title, numCount } = this.props;
    const num = numCount + " Cards";

    return (
      <List.Item
        style={[styles.container, styles.cards]}
        title={title}
        description={num}
        titleStyle={styles.title}
        descriptionStyle={styles.desc}
        left={(props) => (
          <List.Icon {...props} icon="lock-question" color={white} />
        )}
        onPress={() =>
          this.props.navigation.navigate("DeckDetail", { deckTitle: title })
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    height: 100,
    margin: 8,
    backgroundColor: red,
  },
  title: {
    fontSize: 28,
    color: white,
  },
  desc: {
    fontSize: 18,
    color: darkBlue,
  },

  cards: {
    fontSize: 18,
    color: white,
  },
});
