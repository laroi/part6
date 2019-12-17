import React from 'react'
import {createNew} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux';
import services from '../services/anecdotes';
const Anecdotesform = (props) => {
    const getId = () => (100000 * Math.random()).toFixed(0);
    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            content: e.target.content.value.trim(),
            votes: 0,
            id: getId()
        };
        services.add(data)
        .then((_data)=> {
            props.createNew(_data);
        });
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
