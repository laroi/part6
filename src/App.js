import React from 'react';
import {vote, createNew} from './reducers/anecdoteReducer';
import AnecdoteForm from './components/Anecdoteform';
import AnecdoteList from './components/Anecdotelist';
const App = (props) => {
    return (
        <div>
            <h2>Anecdotes</h2>
            <AnecdoteForm store={props.store} />
            <AnecdoteList store={props.store} />
        </div>
    )
}

export default App
