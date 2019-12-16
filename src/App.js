import React from 'react';
import {vote, createNew} from './reducers/anecdoteReducer'
const App = (props) => {
  const anecdotes = props.store.getState().sort((a, b)=> {if (a.votes>b.votes) {return -1} else {return 1} })

  const _vote = (id) => {
    props.store.dispatch(vote(id))
  }
    const onSubmit = (e) => {
        e.preventDefault();
        props.store.dispatch(createNew(e.target.content.value.trim()))

    }
  return (
    <div>
      <h2>Anecdotes</h2>
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
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <div><input name="content"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
