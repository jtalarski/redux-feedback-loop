const initialFeeling = {
    feeling: ""
}

const feelingReducer = (state = initialFeeling, action) => {
    
    if (action.type === 'SET_FEELING') {
        return {
            feeling: action.payload
        }
    }
    return state;
};

export default feelingReducer
