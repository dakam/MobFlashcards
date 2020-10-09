import React from "react";
import { blue, red } from "../utils/colors";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import DList from "./DList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddDeck from "./AddDeck";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();
export default function MainScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          var name = null;
          if (route.name === "Decks") {
            if (Platform.OS === "ios") {
              name = focused ? "ios-list" : "ios-list";
            } else if (Platform.OS === "android") {
              name = focused ? "md-list" : "md-list";
            }

            return <Ionicons name={name} size={size} color={color} />;
          } else if (route.name === "AddDeck") {
            if (Platform.OS === "android") {
              name = focused ? "md-add-circle" : "md-add-circle-outline";
            } else if (Platform.OS === "ios") {
              name = focused ? "ios-add-circle" : "ios-add-circle-outline";
            }

            return <Ionicons name={name} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Decks" component={DList} />
      <Tab.Screen
        name="AddDeck"
        component={AddDeck}
        options={{ title: "Add new Deck" }}
      />
    </Tab.Navigator>
  );
}
