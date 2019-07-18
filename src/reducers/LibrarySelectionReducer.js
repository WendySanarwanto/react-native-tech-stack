import { SELECT_LIBRARY } from '../actions/type';

const librarySelectionReducer = (state = {}, action) => {
  console.log('[DEBUG] - <SelectionReducer> action: \n', action);
  switch (action.type) {
    case SELECT_LIBRARY:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default librarySelectionReducer;
