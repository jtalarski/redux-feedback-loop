const initialFeeling = {
    feeling: "1"
}

const feelingReducer = (state = initialFeeling, action) => {
    console.log('feelingReducer', state, action);
    if (action.type === 'SET_FEELING') {
        return {
            feeling: action.payload
        }
    }
    return state;
};

export default feelingReducer
