import * as ActionTypes from '../actions/ActionTypes';


const UserReducer = (state = {
  isLoading: false, errMess: null, data: null
}, action) => {

  switch (action.type){

    case ActionTypes.DATA_LOADING:
      return {...state, isLoading: true, errMess: null, data: null}

    case ActionTypes.DATA_LOADED:
      return {...state, isLoading: false, errMess: null, data: action.payload};

    case ActionTypes.DATA_FAILED:
      return {...state, isLoading: false, errMess: action.payload}

    case ActionTypes.DATA_CLEARED:
      return {...state, isLoading:false, errMess: null, data: null}

    default:
      return state;
    
  }
};


export default UserReducer;