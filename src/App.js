import React, { Component } from 'react'
import {Button} from 'antd-mobile'
class App extends Component {
  constructor (props) {
    super(props)
    this.addGUM = this.addGUM.bind(this)
    this.removeGUM = this.removeGUM.bind(this)
    this.addGunAsync = this.addGunAsync.bind(this)
  }
  addGUM () {
    const {store, add} = this.props
    store.dispatch(add())
  }
  removeGUM () {
    const {store, remove} = this.props
    store.dispatch(remove())
  }
  addGunAsync () {
    const {store, async} = this.props
    store.dispatch(async())
  }
  render () {
    const store = this.props.store
    const num = store.getState()
    return (
      <div>
        <h1>现在有机枪{num}把</h1>
        <div>
          <Button onClick={this.addGUM}>申请武器</Button>
          <Button onClick={this.removeGUM}>退回武器</Button>
          <Button onClick={this.addGunAsync}>拖两天再给</Button>
        </div>
      </div>
    )
  }
}
export default App
