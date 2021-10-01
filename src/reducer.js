export const initialState = {
    year: '',
    make: '',
    model: '',
    part: '',
    engine: '',
    vin: '',
    transmission: '',
    trim: '',
    name: '',
    email: '',
    state: '',
    phone: '',
    zip: '',
    notes: '',
    lead_source: '',
    stepOne: '',
    stepTwo: '',
    stepThree: '',
    stepFour: '',
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
            };
        case 'ADD_MODEL':
            return {
                ...state,
                model: action.item
            };
        case 'ADD_PART':
            return {
                ...state,
                part: action.item
            };
        case 'ADD_ENGINE':
            return {
                ...state,
                engine: action.item
            };
        case 'ADD_VIN':
            return {
                ...state,
                vin: action.item
            };
        case 'ADD_TRANS':
            return {
                ...state,
                transmission: action.item
            };
        case 'ADD_TRIM':
            return {
                ...state,
                trim: action.item
            };
        case 'ADD_NAME':
            return {
                ...state,
                name: action.item
            };
        case 'ADD_EMAIL':
            return {
                ...state,
                email: action.item
            };
        case 'ADD_STATE':
            return {
                ...state,
                state: action.item
            };
        case 'ADD_PHONE':
            return {
                ...state,
                phone: action.item
            };
        case 'ADD_ZIP':
            return {
                ...state,
                zip: action.item
            };
        case 'ADD_NOTES':
            return {
                ...state,
                notes: action.item
            };
        case 'ADD_SRC':
            return {
                ...state,
                lead_source: action.item
            }

        case 'ADD_STEP_ONE':
            return {
                ...state,
                stepOne: action.item
            };
        case 'ADD_STEP_TWO':
            return {
                ...state,
                stepTwo: action.item
            };
        case 'ADD_STEP_THREE':
            return {
                ...state,
                stepThree: action.item
            };
        case 'ADD_STEP_FOUR':
            return {
                ...state,
                stepFour: action.item
            };
        case 'RESET':
            return {
                ...state,
                year: '',
                make: '',
                model: '',
                part: '',
                engine: '',
                vin: '',
                transmission: '',
                trim: '',
                name: '',
                email: '',
                state: '',
                phone: '',
                zip: '',
                notes: '',
                lead_source: '',
                stepTwo: '',
                stepThree: '',
                stepFour: '',
            }
        default:
            return state;
    }
}

export default reducer;