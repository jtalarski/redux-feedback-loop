import Understanding from "../Understanding/Understanding";

const initialSuccess = {
    feeling: "",
    understanding: "",
    supported: "",
    comments: ""
}

const supportReducer = (state = initialSupport, action) => {
    console.log('feelingReducer', state, action);
    if (action.type === 'RESET_SCORES') {
        return {
            feeling: action.payload,
            understanding: action.payload,
            supported: action.payload,
            comments: action.payload
        }
    }
    return state
}

export default supportReducer