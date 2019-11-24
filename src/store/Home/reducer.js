import ActionTypes from './actionTypes';

const initialState = {
  images: [],
  isLoading: false,
  page: 0,
  pageCount: 1,
  hasMore: true,
};

const home = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.IMAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.IMAGES_LOADED:
      return {
        ...state,
        isLoading: false,
        images: state.images.concat(action.payload.pictures),
        page: action.payload.page,
        pageCount: action.payload.pageCount,
        hasMore: action.payload.hasMore,
      };
    default:
      return state;
  }
};

export default home;
