
const initialState = {
    message:'test'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET':
           return {...state, message:action.message};
        case 'RESET':
            return {...state, message:''};
         default:
            return state;
    }
}
const set = (message) => {
    return {
        type: 'SET',
        message: message
    }
}
const reset = () => {
    return {
        type: 'RESET',
        message: ''
    }
}

export {set, reset, reducer }
