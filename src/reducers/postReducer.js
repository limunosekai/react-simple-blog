import * as actions from '../actions/types';

const INITIAL_STATE = { all: [], post: null };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.FETCH_POSTS:
      return {
        ...state,
        all: action.payload.data,
      };
    default:
      return state;
  }
}
