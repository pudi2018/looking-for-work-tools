import React, {Component} from 'react'
import logoImg from '../../images/job.png'
import './logo.less'
class Logo extends Component {
  render () {
    return (
      <div className='logo-container'><img src={logoImg} alt='' /></div>
    )
  }
}
export default Logo
