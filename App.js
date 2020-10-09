import "react-native-gesture-handler";
import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/index";
import middlewares from "./middleware/index";
import { setLocalNotification } from "./utils/helpers";
import StackScreen from "./components/StackScreen";
import { mobtitles } from "./utils/helpers";

const store = createStore(reducers, middlewares);

export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={store}>
        <StackScreen mobtitles={mobtitles} />
      </Provider>
    );
  }
}
