import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

const state = {
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
};

export default combineReducers(state);

// console.log(store.getState());
// { Libraries: [{"id": 0, "title": "Webpack",, "description": "..."}, ...]}
