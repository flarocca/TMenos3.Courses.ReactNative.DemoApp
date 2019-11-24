import imagesApi from '../../api/images';
import ActionTypes from './actionTypes';

export const imagesLoading = () => {
  return {
    type: ActionTypes.IMAGES_LOADING,
  };
};

export const imagesLoaded = result => {
  return {
    type: ActionTypes.IMAGES_LOADED,
    payload: {
      ...result,
    },
  };
};

export const loadImages = page => {
  return dispatch => {
    dispatch(imagesLoading());
    imagesApi
      .getAll(page)
      .then(result => {
        dispatch(imagesLoaded(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
