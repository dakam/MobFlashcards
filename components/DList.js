import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { connect } from "react-redux";
import DListItemSingle from "./DListItemSingle";
import { loaddecksData } from "../actions/index";

class DList extends Component {
  componentDidMount() {
    this.props.loaddecksData();
  }

  render() {
    const { navigation, decks } = this.props;
    return (
      <View style={[styles.container, { marginTop: 24 }]}>
        <FlatList
          data={Object.values(decks)}
          renderItem={(deck) => (
            <DListItemSingle
              title={deck.item.title}
              numCount={deck.item.questions.length}
              navigation={navigation}
            />
          )}
          keyExtractor={(deck) => deck.title}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

const mapStateToProps = (state) => {
  return { decks: state };
};

export default connect(mapStateToProps, { loaddecksData })(DList);
