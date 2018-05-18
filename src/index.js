import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducer'
import './config/config'
import {BrowserRouter, Route} from 'react-router-dom'
import Login from './container/login/login'
import Register from './container/register/register'
// applyMiddleware管理中间键
const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f// window.devToolsExtension()这个是chrome安装的一个插件看redux信息的
))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'))
// store.subscribe(render)
