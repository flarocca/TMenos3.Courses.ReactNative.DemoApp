import ActionTypes from './actionTypes';

const initialState = {
  details: {},
  isLoading: false,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.IMAGE_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.IMAGE_LOADED:
      return {
        ...state,
        isLoading: false,
        details: {
          ...action.payload,
          imageUrl: `http://195.39.233.28:8035/images/${action.payload.id}`,
        },
      };
    default:
      return state;
  }
};

export default home;
