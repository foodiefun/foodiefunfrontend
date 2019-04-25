import axios from 'axios';

export const FOODIE_FETCH = 'FOODIE_FETCH';
export const FOODIE_FETCHED = 'FOODIE_FETCHED';
export const FOODIE_ERROR = 'FOODIE_ERROR';
export const FOODIE_ADD = 'FOODIE_ADD';
export const FOODIE_ADDED = 'FOODIE_ADDED';
export const FOODIE_DELETE = 'FOODIE_ADDED';



export const getData = data => {
  return dispatch => {
    dispatch({ type: FOODIE_FETCH });

    axios.get(URL, data).then(res => {
      console.log(res);
      dispatch({
        type: FOODIE_FETCHED,
        payload: res.data
      }).catch(err => {
        dispatch({
          type: FOODIE_ERROR,
          payload: err
        });
      });
    });
  };
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
      type:'FOODIE_UPDATE',
      payload: res.data
    })
  );
};

export const deletePost = id => {
  return (dispatch) => {
    return axios.get(URL)
      .then(res => {
        dispatch({type: FOODIE_DELETE, payload:res.data})
      })
      .catch(err => {
        dispatch({type: FOODIE_ERROR, payload:err})
      });
  };
};

