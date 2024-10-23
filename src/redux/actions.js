import { SET_SEARCH_TERM, SET_POSTS, CLEAR_POSTS } from './actionTypes';

export const setSearchTerm = (term) => ({
    type: SET_SEARCH_TERM,
    payload: term,
  });

  export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts,
  });
  
  export const clearPosts = () => ({
    type: CLEAR_POSTS,
  });
  