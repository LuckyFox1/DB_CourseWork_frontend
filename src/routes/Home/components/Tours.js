import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { connect } from 'react-redux'
import './HomeView.scss'

class Tours extends React.Component {
  sendReq = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:5000/user',
      success: function (data) {
        // console.log(data)
      }
    })
  }

  render () {
    const { tours } = this.props
    // console.log(this.props)
    return <div className={'tours'}>You logged in!</div>
  }
}

// export default HomeView
Tours.propTypes = {
  tours: PropTypes.object
}

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  tours: state.tours
})

export default connect(mapStateToProps, mapDispatchToProps)(Tours)
