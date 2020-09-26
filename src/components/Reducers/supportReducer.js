const initialSupport = {
    support: ""
}

const supportReducer = (state = initialSupport, action) => {
    console.log('feelingReducer', state, action);
    if (action.type === 'SET_SUPPORTED') {
        return {
            support: action.payload
        }
    }
    return state
}

export default supportReducer