import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
const neutral = () => {
    store.dispatch({
      type: 'OK'
    })
  }
const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }
    const {good:_good=0, ok=0, bad:_bad=0} = store.getState();
  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={neutral}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {_good}</div>
      <div>neutral{ok}</div>
      <div>bad{_bad}</div>
      <div> all {_bad+ok+_good} </div>
      <div> average {(_bad+ok+_good)/3} </div>

    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
