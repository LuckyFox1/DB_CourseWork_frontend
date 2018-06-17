import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { connect } from 'react-redux'
import { loginUser } from '../modules/home'

class Login extends React.Component {
  login = () => {
    var props = this.props
    var login = this.inputLogin.value
    var password = this.inputPassword.value
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5000/login',
      data: {
        login: login,
        password: password
      },
      success: function (data) {
        console.log(data.login[0])
        // let login = JSON.parse(data.login)
        props.loginUser(data.login[0], data.success)
      }
    })
  }

  render () {
    // const { tours } = this.props
    console.log(this.props)
    return <div className={'login'}>
      <form className={'form-horizontal'}>
        <div className={'form-group'}>
          <label className={'col-sm-2 control-label'} htmlFor={'login'}>Login:</label>
          <div className={'col-sm-9 '}>
            <input className={'form-control'} id={'login'} type={'text'} ref={(node) => { this.inputLogin = node }} />
          </div>
        </div>
        <div className={'form-group'}>
          <label className={'col-sm-2 control-label'} htmlFor={'password'}>Password:</label>
          <div className={'col-sm-9'}>
            <input
              className={'form-control'}
              id={'password'}
              type={'password'}
              ref={(node) => { this.inputPassword = node }}
            />
          </div>
        </div>
        <div className={'form-group'}>
          <div className='col-sm-offset-2 col-sm-9'>
            <div className={'btn btn-default'} onClick={this.login}>Login</div>
          </div>
        </div>
      </form>
    </div>
  }
}

Login.propTypes = {
  tours: PropTypes.object,
  loginUser: PropTypes.func
}

const mapDispatchToProps = {
  loginUser
}

const mapStateToProps = (state) => ({
  tours: state.tours
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
