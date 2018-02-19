import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import PostReducer from './post-reducer';
import CommentReducer from './comments-reducer';

const RootReducer = combineReducers({
    PostReducer,
    CommentReducer,
    routing: routerReducer
});

export default  RootReducer;