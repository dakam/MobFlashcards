/* Code Written By Damiano Kato */

import { AsyncStorage } from "react-native";
import * as Permissions from "expo-permissions";
import { Notifications } from "expo";

/*
Stack Screen Titles 

*/
export const mobtitles = {
  thome: "Welcome to Mobile Flashcard",
  tdeckdetail: "Deck Details",
  taddcard: " Add Card",
  tquizres: " Quiz Results",
};
/*

DECKS storage Key

*/
export const DS_STORAGE_KEY = "Mobflashcards:decks";

/*

Code below for handling App notifications 

*/
const MOB_NOTIFICATION_STORAGE_KEY = "mobile_flashcards.notification";

export function clearLocalNotification() {
  return AsyncStorage.removeItem(MOB_NOTIFICATION_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
}

function createNotification() {
  return {
    title: "Mob Flashcard App",
    body: "Today's Studies are waiting for You Dear!",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: "high",
      sticky: false,
      vibrate: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(MOB_NOTIFICATION_STORAGE_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: "day",
            });

            AsyncStorage.setItem(
              MOB_NOTIFICATION_STORAGE_KEY,
              JSON.stringify(true)
            );
          }
        });
      }
    })
    .catch((err) => console.warn(err));
}
