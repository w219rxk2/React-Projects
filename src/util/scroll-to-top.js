import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps){
        if(this.props.location !== prevProps.location){
            window.scrollTo(0, 0);
        }
    }

    return(){
        return this.props.children;
    }
}

ScrollToTop.propTypes = {
    location: PropTypes.object
}

export default withRouter(ScrollToTop);
