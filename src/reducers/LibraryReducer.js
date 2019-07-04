import { FETCH_LIBRARY } from '../actions/type';

const INITIAL_STATE = [];

const libraryReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_LIBRARY:
      const updatedState = [...new Set([...state, ...action.payload])];
      console.log(`[debug]<libraryReducer> updatedState: `, updatedState);
      return updatedState;
    default:
      return state;
  }
};

export default libraryReducer;
