import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './App'
import reducer from './reducers'
import { Provider } from 'react-redux'
import anecService from './services/anecdotes';
import {init} from './reducers/anecdoteReducer';
const store = createStore(reducer)

const render = () => {
  ReactDOM.render(
  <Provider store={store}><App/></Provider>,
    document.getElementById('root')
  )
}
anecService.getAll()
    .then(data => store.dispatch(init(data)));

render()
store.subscribe(render)
