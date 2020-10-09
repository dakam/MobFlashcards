import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckDetail from "./DeckDetail";
import AddQtn from "./AddQtn";
import TakeQuiz from "./TakeQuiz";
import QuizDetails from "./QuizDetails";
import MainScreen from "./MainScreen";
const Stack = createStackNavigator();
export default class StackScreen extends Component {
  render() {
    const { mobtitles } = this.props;

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ title: mobtitles.thome }}
          />
          <Stack.Screen
            name="DeckDetail"
            component={DeckDetail}
            options={{ title: mobtitles.tdeckdetail }}
          />

          <Stack.Screen
            name="AddCard"
            component={AddQtn}
            options={{ title: mobtitles.taddcard }}
          />
          <Stack.Screen name="Quiz" component={TakeQuiz} />
          <Stack.Screen
            name="QuizResult"
            component={QuizDetails}
            options={{ title: mobtitles.tquizres }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
