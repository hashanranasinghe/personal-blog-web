import { FETCH_BLOGS_FAILURE, FETCH_BLOGS_REQUEST, FETCH_BLOGS_SUCCESS } from "./actiontypes";

export const fetchBlogsRequest = () => ({
    type: FETCH_BLOGS_REQUEST
  });
  
  export const fetchBlogsSuccess = (blogs) => ({
    type: FETCH_BLOGS_SUCCESS,
    payload: blogs
  });
  
  export const fetchBlogsFailure = (error) => ({
    type: FETCH_BLOGS_FAILURE,
    payload: error
  });