import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  request: null,
  success: ['data'],
  failure: null
});

export const NewsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  news: [],
  fetching: null,
  error: null,
});

/* ------------- Reducers ------------- */

/* --- Request the News api --- */
export const request = (state, { }) => {
  return state.merge({ fetching: true });
};

/* --- Successful api response --- */
export const success = (state, action) => {
  const { data } = action;
  return state.merge({ fetching: false, error: null,news: data?.articles });
};

/* --- Failed to get the News api --- */
export const failure = (state) =>
  state.merge({ fetching: false, error: true, data: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST]: request,
  [Types.SUCCESS]: success,
  [Types.FAILURE]: failure
});
