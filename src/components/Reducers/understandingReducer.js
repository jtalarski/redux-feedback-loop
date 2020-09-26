const initialUnderstanding = {
    understanding: ""
}

const understandingReducer = (state = initialUnderstanding, action) => {
   
    if (action.type === 'SET_UNDERSTANDING') {
        return {
            understanding: action.payload
        }
    }
    return state
}

export default understandingReducer