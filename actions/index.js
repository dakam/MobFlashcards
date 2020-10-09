import { getDecks } from "../utils/api";

export const LOAD_DECKS = "LOAD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const GET_DECK = "GET_DECK";

export function get_Decks(decks) {
  return { type: LOAD_DECKS, decks };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function addCardToDeck(deckTitle, card) {
  return {
    type: ADD_CARD,
    deckTitle,
    card,
  };
}

export function getOneDeck(deck) {
  return {
    type: GET_DECK,
    deck,
  };
}

export function loaddecksData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(get_Decks(decks));
    });
  };
}
