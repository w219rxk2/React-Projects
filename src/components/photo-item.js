import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../css/photo-item.css';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class PhotoItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
                <figure className='grid-figure'>
                   <div className='grid-photo-wrap'>
                       <Link to={`/detail/${this.props.code}`}>
                           <img className='grid-figure' src={this.props.display_src} alt={this.props.caption}/>
                       </Link>
                       <CSSTransitionGroup transitionName='like'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                           <span key={this.props.likes} className='likes-heart'>
                               {this.props.likes}
                           </span>
                       </CSSTransitionGroup>
                   </div>
                    <figcaption>
                        <p>{this.props.caption}</p>
                        <div className="control-buttons">
                            <button className="likes">
                                &hearts; {this.props.likes}
                            </button>
                            <Link className='button' to={`/detail/${this.props.code}`}>
                               <span className='comment-count'>
                                   <span className='speech-bubble'>
                                       {this.props.comments[this.props.code] ? this.props.comments[this.props.code].length : 0}
                                   </span>
                               </span>
                            </Link>
                        </div>
                    </figcaption>
                </figure>
        );
    }
}

PhotoItem.propTypes = {
    index:PropTypes.number.isRequired,
    code: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    display_src:PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired
};

export default PhotoItem;