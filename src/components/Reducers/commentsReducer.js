const initialComment = {
    comments: "none"
}

const commentsReducer = (state = initialComment, action) => {
    if (action.type === 'SET_COMMENTS') {
        return {
            comments: action.payload
        }
    }
    return state
}

export default commentsReducer