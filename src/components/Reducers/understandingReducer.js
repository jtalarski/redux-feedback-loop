const initialUnderstanding = {
    understanding: "1"
}

const understandingReducer = (state = initialUnderstanding, action) => {
    console.log('feelingReducer', state, action);
    if (action.type === 'SET_FEELING') {
        return {
            understanding: action.payload
        }
    }
    return state
}

export default understandingReducer