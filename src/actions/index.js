import { FETCH_LIBRARY, SELECT_LIBRARY } from './type';
import libraryData from '../data/LibraryList';

export const fetchLibrary = () => {
  const payload = libraryData;
  return {
    type: FETCH_LIBRARY,
    payload,
  };
};

export const selectLibrary = libraryId => (dispatch, getState) => {
  const libraries = getState().libraries;
  if (Array.isArray(libraries)) {
    const payload = libraries.find(lib => lib.id === libraryId);

    dispatch({
      type: SELECT_LIBRARY,
      payload,
    });
  }
};
