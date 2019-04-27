import {FOODIE_FETCH} from '../actions';
import {FOODIE_FETCHED} from '../actions';
import {FOODIE_ERROR} from '../actions';
import {FOODIE_ADD} from '../actions';
import {FOODIE_ADDED} from '../actions';
// import {FOODIE_DELETE} from '../actions';
import {FOODIE_UNAUTH } from '../actions';
import {LOGIN_START} from '../actions';
import {LOGIN_SUCCESS} from '../actions';
import {LOGIN_FAILURE} from '../actions';


const initialState = {
  restaurant: [],
  foodieFetch: false,
  foodieFetched: false,

  foodieAdd: false,
  foodieAdded: false,

  foodieUpdate: false,
  foodieDelete: false,

  foodieError: null,

  loginStart: false,
  loginSuccess: false,
  loginFailure: false,

  isloggingIn: false,
  token: localStorage.getItem('token')
  
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case FOODIE_FETCH:
    return {...state, foodieFetch: true };
  case FOODIE_FETCHED:
    return {...state, foodieFetch: false, foodieFetched: true, restaurant: action.payload };

  case FOODIE_ADD:
    return {...state, foodieAdd: true };
  case FOODIE_ADDED:
    return {...state, foodieAdd: false, foodieAdded: true, restaurant: action.payload };

  case FOODIE_ERROR:
    return {...state, foodieError: action.payload };
    case FOODIE_UNAUTH:
    return {...state, foodieError: action.payload };

  case LOGIN_START:
    return {...state, loginStart: true };

  case LOGIN_SUCCESS: 
    return {...state, isLoggingIn: false, token: action.payload };
   
  case LOGIN_FAILURE: 
    return {...state, loginFailure: 'failed login', isLoggingIn: false};
    
    default:
      return state;
  }
};
