import {connect} from 'react-redux';
import ImageView from '../components/ImageView/ImageView';
import {loadImage} from '../store/ImageView/actions';

const mapStateToProps = state => {
  return {
    details: state.imageView.details,
    isLoading: state.imageView.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: id => dispatch(loadImage(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImageView);
