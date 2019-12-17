
const getId = () => (100000 * Math.random()).toFixed(0)

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
const createNew = (content) => {
    return {
        type: 'NEW',
        data: {
            content: content,
            votes: 0,
            id: getId()
        }
    }
}

export const init = (data) => {
  return {
    type: 'INIT',
    data: data,
  }
}

export {reducer, createNew, vote}
