import axios from 'axios';

import * as actions from '../actions/types';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=do213ih13dn1';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: actions.FETCH_POSTS,
    payload: request,
  };
}
