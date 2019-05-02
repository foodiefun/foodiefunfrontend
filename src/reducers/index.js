import { combineReducers } from 'redux';

import fetchReducer from './fetchRed';
import addReducer from './addRed';
import errorReducer from './errorRed';
import authReducer from './authReducer';

const rootReducer = combineReducers({
addReducer, errorReducer, fetchReducer, authReducer
})

export default rootReducer;



// const initialState = {
//   restaurant: [
    
//   ],
//   // foodieFetch: false,
//   // foodieFetched: false,

//   // foodieAdd: false,
//   // foodieAdded: false,

//   foodieUpdate: false,
//   foodieDelete: false,

//   // foodieError: null,

//   // loginStart: false,
//   isloggingIn: false,
//   loginSuccess: false,
//   loginFailure: false,
 

//   token: localStorage.getItem('token'),
//   errorStatusCode: null,
//   error: '',
  
// };


