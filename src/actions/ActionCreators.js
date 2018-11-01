import * as ActionTypes from './ActionTypes';
import axios from 'axios';

export const dataLoading = () => ({

  type: ActionTypes.DATA_LOADING

});

export const dataFailed = (errmess) => ({

  type: ActionTypes.DATA_FAILED,
  payload: errmess
})

export const dataLoaded = (data) => ({
  type: ActionTypes.DATA_LOADED,
  payload: data
})


export const fetchData = inputData => (dispatch) => {

  dispatch(dataLoading());
  const url = `https://api.github.com/users/${inputData}`;

  
  return axios.get(url).then(
    response => {
      if (response.status === 200){
        return response.data
      }else{
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          console.log(error);
          error.response = response;
          throw error
      }
    }, 
    error => {
      var errmess = new Error(error.message);
      throw errmess;
      })
      .then(response => dispatch(dataLoaded(response)))
      .catch(error => dispatch(dataFailed(error.message)))
  
};