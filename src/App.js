import React from 'react';
import AnecdoteForm from './components/Anecdoteform';
import AnecdoteList  from './components/Anecdotelist';
import Notification from './components/Notification';
import Filter from './components/Filter';

const App = (props) => {
    return (
        <div>
            <Notification store={props.store} />
            <h2>Anecdotes</h2>
            <AnecdoteForm store={props.store} />
<Filter store={props.store} />
            <AnecdoteList store={props.store} />
        </div>
    )
}

export default App
