import {combineReducers} from 'redux';
import home from './Home/reducer';
import imageView from './ImageView/reducer';

export default combineReducers({
  home,
  imageView,
});
