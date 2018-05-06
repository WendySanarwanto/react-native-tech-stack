import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';

export default combineReducers({
  libraries: LibraryReducer
});

// console.log(store.getState());
// { Libraries: [{"id": 0, "title": "Webpack",, "description": "..."}, ...]}
