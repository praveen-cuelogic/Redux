const { redux, createStore, combineReducers } = require("redux");

//Create Store
//const createStore = redux.createStore;
//const combineReducers = redux.combineReducers;

//action type
//const BUY_BOOK = "BUY_BOOK";

//State Value initilize
const initialStateBooks = {
  numberOfBooks: 10,
};
const initialStatePens = {
  numberOfPens: 20,
};

//Multi actions
//action creator : wrapping the action in a single function > return action
function buyBook() {
  return {
    //action
    type: "BUY_BOOK",
    payload: "This is my first Redux Action",
  };
}

function buyPen() {
  return {
    //action
    type: "BUY_PEN",
    payload: "This is my Second Redux Action",
  };
}

//Multi reducers
//reducer: (prevStateValue, action) => newState
const booksReducer = (state = initialStateBooks, action) => {
  switch (action.type) {
    case "BUY_BOOK":
      return {
        ...state,
        numberOfBooks: state.numberOfBooks - 1,
      };

    default:
      return state;
  }
};

const pensReducer = (state = initialStatePens, action) => {
  switch (action.type) {
    case "BUY_PEN":
      return {
        ...state,
        numberOfPens: state.numberOfPens - 2,
      };

    default:
      return state;
  }
};

//We can like this
//const reducer = combineReducers({ booksReducer, pensReducer });

const reducer = combineReducers({
  book: booksReducer,
  pen: pensReducer,
});

const store = createStore(reducer);
console.log("Initial State", store.getState());

//subscribe
const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value", store.getState());
});

store.dispatch(buyBook());
store.dispatch(buyPen());
unsubscribe();

/*

Work Flow:

React App ->
  -Dispatch -> Action
Action -> Reducer
Reducer -> Redux Store State
  subscribe -> React App

*/
