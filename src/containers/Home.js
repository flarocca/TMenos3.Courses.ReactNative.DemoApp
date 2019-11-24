import {connect} from 'react-redux';
import Home from '../components/Home/Home';
import {loadImages} from '../store/Home/actions';

const mapStateToProps = state => {
  return {
    images: state.home.images,
    isLoading: state.home.isLoading,
    page: state.home.page,
    pageCount: state.home.pageCount,
    hasMore: state.home.hasMore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadImages: currentPage => dispatch(loadImages(currentPage + 1)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
