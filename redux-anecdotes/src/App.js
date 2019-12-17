import React, { useEffect } from 'react';
import AnecdoteForm from './components/Anecdoteform';
import AnecdoteList  from './components/Anecdotelist';
import Notification from './components/Notification';
import Filter from './components/Filter';
import { connect } from 'react-redux';
import {init} from './reducers/anecdoteReducer'
const App = (props) => {
    useEffect(() => {
        props.init()
    },[])

    return (
        <div>
            <Notification/>
            <h2>Anecdotes</h2>
            <AnecdoteForm/>
            <Filter/>
            <AnecdoteList />
        </div>
    )
}
const mapDispatchToProps = {init}
export default connect(undefined, mapDispatchToProps)(App);
