import {FOODIE_FETCH} from '../actions';
import {FOODIE_FETCHED} from '../actions';
import {FOODIE_ERROR} from '../actions';
import {FOODIE_ADD} from '../actions';
import {FOODIE_ADDED} from '../actions';
import {FOODIE_DELETE} from '../actions';

const initialState = {
  restaurant: [],
  foodieFetch: false,
  foodieAdd: false,
  foodieFetched: false,
  foodieAdded: false,
  foodieUpdate: false,
  foodieDelete: false,
  foodieError: null
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FOODIE_FETCH:
    return {...state, foodieFetch: true };
  case FOODIE_FETCHED:
    return {...state, fetchedFoodies: false, foodieFetched: true, restaurant: payload };
  case FOODIE_ADD:
    return {...state, foodieAdd: true };
  case FOODIE_ADDED:
    return {...state, foodieAdd: false, foodieAdded: true, restaurant: payload };
  case FOODIE_ERROR:
    return {...state, foodieError: payload };
    default:
      return state;
  }
};
