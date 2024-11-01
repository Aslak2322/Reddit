import { SET_SEARCH_TERM, SET_POSTS, CLEAR_POSTS } from './actionTypes';

const initialState = {
  searchTerm: '',
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };
    case SET_POSTS:
      return { ...state, posts: action.payload };
    case CLEAR_POSTS:
      return { ...state, posts: [] };
    default:
      return state;
  }
};

export default reducer;