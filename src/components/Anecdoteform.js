import React from 'react'
import {createNew} from '../reducers/anecdoteReducer'

const Anecdotesform = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.store.dispatch(createNew(e.target.content.value.trim()))
    }
  return (
    <div>
        <h2>create new</h2>
        <form onSubmit={onSubmit}>
            <div><input name="content"/></div>
            <button>create</button>
        </form>
    </div>

  )
}

export default Anecdotesform;
