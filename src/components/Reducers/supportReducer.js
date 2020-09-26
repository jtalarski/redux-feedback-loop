const initialSupport = {
    support: "1"
}

const supportReducer = (state = initialSupport, action) => {
    console.log('feelingReducer', state, action);
    if (action.type === 'SET_FEELING') {
        return {
            support: action.payload
        }
    }
    return state
}

export default supportReducer