import React from 'react';
import PropTypes from 'prop-types';
import PhotoItem from './photo-item';

class Photos extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="photo-grid">
                {
                  this.props.posts.map((post, i) => {
                      return (
                          <PhotoItem {...post}{...this.props} key={i} index={i} />
                      );
                  })
                }
            </div>
        );
    }
}

Photos.propTypes = {
    posts:PropTypes.array.isRequired,
    comments:PropTypes.shape({
        text: PropTypes.string,
        user: PropTypes.string
    }).isRequired
};

export default Photos;