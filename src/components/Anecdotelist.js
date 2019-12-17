import React from 'react';
import { connect } from 'react-redux';
import {vote} from '../reducers/anecdoteReducer';
import {set, reset} from '../reducers/notificationReducer';

const Anecdoteslist = (props) => {
    const style = {
        border: 'solid',
        padding: 10,
        borderWidth: 1
    };
    const _vote = (id) => {
        const content = props.anecdotes.find(x=>x.id===id)
        props.vote(id, {content: content.content, votes: content.votes+1 });
        props.set(`You voted for ${content.content}`);
        setTimeout(()=> {props.reset()}, 5000)
    };


    return (
        <div style={style}>
        {props.anecdotes.map(anecdote =>
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
const filterFun = ({filter, anecdotes}) => {
    anecdotes = anecdotes.sort((a, b)=> {if (a.votes>b.votes) {return -1} else {return 1} })
    if (filter) {
        anecdotes = anecdotes.filter(x=>x.content.includes(filter))
    }
    return anecdotes;
}
const mapDispatchToProps = { vote, set, reset};
const mapStateToProps = (state) => {
  return {
    anecdotes: filterFun(state),
    filter: state.filter
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Anecdoteslist);
