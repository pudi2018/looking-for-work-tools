import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
// applyMiddleware管理中间键
import {counter, addGUM, removeGUM, addGunAsync} from './index.redux'
const store = createStore(counter, applyMiddleware(thunk))
function render () {
  ReactDOM.render(<App store={store} add={addGUM} remove={removeGUM} async={addGunAsync} />, document.getElementById('root'))
}
render()
store.subscribe(render)
