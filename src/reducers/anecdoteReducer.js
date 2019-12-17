import anecService from '../services/anecdotes';
const initialState = [];

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'VOTE':
           const nState = [...state]
           const idx = nState.findIndex(x=>x.id===action.data.id);
           nState[idx].votes +=1;
           return [...nState];
        case 'INIT':
            return action.data;
        case 'NEW':
            console.log(action.data);
            return [...state, action.data];
         default:
            return state;
    }
}
const vote = (id) => {
    return {
        type: 'VOTE',
        data: {id}
    }
}
const createNew = (data) => {
    return {
        type: 'NEW',
        data: data
    }
}

export const init = (data) => {
    return async (dispatch) => {
        const anecs = await anecService.getAll();
        dispatch({
            type: 'INIT',
            data: anecs,
        })
    }
}

export {reducer, createNew, vote}
