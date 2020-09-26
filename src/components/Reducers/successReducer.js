const initialSurvey = {
    feeling: "",
    understanding: "",
    support: "",
    comments: ""
}

const successReducer = (state = initialSurvey, action) => {
    
    if (action.type === 'TEST_RESET') {
        return {
            feeling: "",
            understanding: "",
            support: "",
            comments: ""
        }
    }
    return state;
};

export default successReducer