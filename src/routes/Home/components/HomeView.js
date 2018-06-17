import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import Login from './Login'
import Tours from './Tours'
import { connect } from 'react-redux'

class HomeView extends React.Component {
  sendReq = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:5000/user',
      success: function (data) {
      }
    })
  }

  render () {
    const { tours } = this.props
    console.log(this.props)
    return <div className={'tours'}>
      { tours && tours.loggedIn
        ? <Tours />
        : <Login />
      }
    </div>
  }
}

// export default HomeView
HomeView.propTypes = {
  tours: PropTypes.object
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  tours: state.tours
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
