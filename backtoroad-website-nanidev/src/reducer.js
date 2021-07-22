export const initialState = {
    year: '',
    make: '',
    model: '',
    part: '',
    stepOne: '',
    stepTwo: '',
    stepThree: '',
    user: null
};

const reducer = (state, action) => {
   // console.log(action);
    switch (action.type) {
        case 'ADD_YEAR':
            return {
                ...state,
                year: action.item
            };
        case 'ADD_MAKE':
            return {
                ...state,
                make: action.item
            }
        case 'ADD_MODEL':
            return {
                ...state,
                model: action.item
            }
        case 'ADD_PART':
            return {
                ...state,
                part: action.item
            }
        case 'ADD_STEP_ONE':
            return {
                ...state,
                stepOne: action.item
            }
        case 'ADD_STEP_TWO':
            return {
                ...state,
                stepTwo: action.item
            }
        case 'ADD_STEP_THREE':
            return {
                ...state,
                stepThree: action.item
            }
        case 'RESET':
            return {
                ...state,
                year: '',
                make: '',
                model: '',
                part: '',
                stepTwo: '',
                stepThree: ''
            }
        default:
            return state;
    }
}

export default reducer;