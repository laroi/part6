import React from 'react'
import {createNew} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux';

const Anecdotesform = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.createNew(e.target.content.value.trim())
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
const mapDispatchToProps= {createNew};
export default connect(undefined, mapDispatchToProps)(Anecdotesform);
