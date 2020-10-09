import { _decks } from "./_DATA";
import { AsyncStorage } from "react-native";
import { DS_STORAGE_KEY } from "./helpers";

export function getDeck(nameId) {
  return AsyncStorage.getItem(DS_STORAGE_KEY).then((results) => {
    let Ddeck = JSON.parse(results);
    return (theDeck = Ddeck[nameId]);
  });
}

export function getDecks() {
  return AsyncStorage.getItem(DS_STORAGE_KEY).then((dResults) => {
    if (dResults === null) {
      return {};
    } else {
      return JSON.parse(dResults);
    }
  });
}

export function addDeck(deckName) {
  return AsyncStorage.mergeItem(
    DS_STORAGE_KEY,
    JSON.stringify({
      [deckName]: {
        title: deckName,
        questions: [],
      },
    })
  );
}

export async function addCard(deckTitle, card) {
  try {
    const deck = await getDeck(deckTitle);

    await AsyncStorage.mergeItem(
      DS_STORAGE_KEY,
      JSON.stringify({
        [deckTitle]: {
          questions: deck.questions.concat(card),
        },
      })
    );
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

export async function resetData() {
  try {
    await AsyncStorage.setItem(DS_STORAGE_KEY, JSON.stringify(_decks));
  } catch (error) {
    alert(error);
  }
}
