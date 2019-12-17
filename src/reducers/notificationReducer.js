
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
const set = (message, time=5000) => {
    return async(dispatch) => {
        dispatch({ type: 'SET', message: message });
        setTimeout(()=> { dispatch({type: 'RESET'})}, time)
    }
}
const reset = () => {
    return {
        type: 'RESET',
        message: ''
    }
}

export {set, reset, reducer }
