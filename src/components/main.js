import React from 'react';

// import helmet
import Helmet from 'react-helmet';

// import containers
import PhotosContainer from '../containers/photos-container';

import { Link } from 'react-router-dom';

class Main extends React.Component {
    construct(props){
    }
    render(){
        return (
            <div>
                <Helmet title='Friends' titleTemplate='%s | Photo-Grid'/>
                <h1><Link to='/'>Friendstagram</Link></h1>
                <PhotosContainer/>
            </div>
        );
    }
}

export default Main;