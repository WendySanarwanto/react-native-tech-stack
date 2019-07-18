import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import LibrarySelectionReducer from './LibrarySelectionReducer';

const state = {
  libraries: LibraryReducer,
  selectedLibrary: LibrarySelectionReducer,
};

export default combineReducers(state);

// console.log(store.getState());
// { Libraries: [{"id": 0, "title": "Webpack",, "description": "..."}, ...]}
