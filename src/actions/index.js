import axios from 'axios';

export const FOODIE_FETCH = 'FOODIE_FETCH';
export const FOODIE_FETCHED = 'FOODIE_FETCHED';
export const FOODIE_ERROR = 'FOODIE_ERROR';
export const FOODIE_ADD = 'FOODIE_ADD';
export const FOODIE_ADDED = 'FOODIE_ADDED';
export const FOODIE_DELETE = 'FOODIE_ADDED';
export const FOODIE_UNAUTH = 'FOODIE_UNAUTH';

const URL = 'http://localhost:5000/api/restaurants';

export const getData = data => {
  return dispatch => {
    dispatch({ type: FOODIE_FETCH });

    axios
      .get('http://localhost:5000/api/restaurants', {
        headers: { Authorization: localStorage.getItem('token') }
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: FOODIE_FETCHED,
          payload: res.data
        });
      })
      .catch(err => {
        console.log(err);
        if (err.response.status === 403) {
          dispatch({
            type: FOODIE_ERROR,
            payload: err
          });
        } else {
          dispatch({ type: FOODIE_UNAUTH, payload: err });
        }
      });
  };
};

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });

  return axios
    .post('http://localhost5000/api/login', creds)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      console.log('login err: ', err);
      if (err.response && err.response.status === 403) {
        localStorage.removeItem('token');
      }
      dispatch({ type: LOGIN_FAILURE });
    });
};



export const addFoodie = foodie => dispatch => {
  dispatch({ type: FOODIE_ADD });

  axios
    .post(URL, foodie)
    .then(res => {
      dispatch({ type: FOODIE_ADD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FOODIE_ERROR, payload: err });
    });
};

export const updateFoodie = foodie => dispatch => {
  axios.put('URL/foodie', foodie).then(res =>
    dispatch({
      type: 'FOODIE_UPDATE',
      payload: res.data
    })
  );
};

export const deletePost = id => {
  return dispatch => {
    return axios
      .get(URL)
      .then(res => {
        dispatch({ type: FOODIE_DELETE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FOODIE_ERROR, payload: err });
      });
  };
};
