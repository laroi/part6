import React from 'react'
import {vote} from '../reducers/anecdoteReducer'
import {set, reset} from '../reducers/notificationReducer'

const Anecdoteslist = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    };
    const _vote = (id) => {
        const content = anecdotes.find(x=>x.id===id).content
        props.store.dispatch(vote(id));
        props.store.dispatch(set(`You voted for ${content}`));
        setTimeout(()=> {props.store.dispatch(reset())}, 5000)
    };

    let anecdotes = props.store.getState().anecdotes.sort((a, b)=> {if (a.votes>b.votes) {return -1} else {return 1} })
    const filter = props.store.getState().filter;
    if (filter) {
        anecdotes = anecdotes.filter(x=>x.content.includes(filter))
    }

    return (
        <div style={style}>
        {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
        <div>
        {anecdote.content}
        </div>
        <div>
        has {anecdote.votes}
        <button onClick={() => _vote(anecdote.id)}>vote</button>
        </div>
        </div>
        )}

        </div>
    )
}

export default Anecdoteslist;
