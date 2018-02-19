
const PostReducer = (state=[],action) => {
    switch(action.type){
        case 'INCREMENT_LIKES':
            return state;
        default:
            return state;
    }
};

export default PostReducer;