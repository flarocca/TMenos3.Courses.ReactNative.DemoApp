import imagesApi from '../../api/images';
import ActionTypes from './actionTypes';

export const imageLoading = () => {
  return {
    type: ActionTypes.IMAGE_LOADING,
  };
};

export const imageLoaded = result => {
  return {
    type: ActionTypes.IMAGE_LOADED,
    payload: {
      ...result,
    },
  };
};

export const loadImage = id => {
  return dispatch => {
    dispatch(imageLoading());
    imagesApi
      .get(id)
      .then(result => {
        dispatch(imageLoaded(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
