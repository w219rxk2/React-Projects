import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import the root reducer
import RootReducer from './reducers/composite-reducer';

import Comments from '../data/comments';
import Posts from '../data/posts';

// create an object for the default data
const defaultState = {
    PostReducer: Posts,
    CommentReducer: Comments
};


const Store = createStore(
    RootReducer,
    defaultState,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default Store;