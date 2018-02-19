import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actions';

import Photos from '../components/photos';

const mapStateToProps = (state) => {
    return {
        posts:state.PostReducer,
        comments:state.CommentReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        actionCreators,
        dispatch
    );
};

export default connect(mapStateToProps,mapDispatchToProps)(Photos);

