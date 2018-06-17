import React from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import { connect } from 'react-redux'
import './HomeView.scss'
import './Tours.scss'
import { setCurrentPage } from '../modules/home'

class Tours extends React.Component {
  componentDidMount () {
    console.log('did mount')
    this.getToursByPage(1)
  }

  getToursByPage = (page) => {
    let props = this.props
    $.ajax({
      method: 'GET',
      url: `http://localhost:5000/tours/${page}`,
      success: function (data) {
        props.setCurrentPage(page, data)
      }
    })
  }

  render () {
    const { tours } = this.props
    return <div className={'tours'}>
      <ul>
        {
          tours.tours.map(function (item) {
            return <li key={item.id_tour}>{ item.tour_name }</li>
          })
        }
      </ul>
    </div>
  }
}

// export default HomeView
Tours.propTypes = {
  tours: PropTypes.object,
  setCurrentPage: PropTypes.func
}

const mapDispatchToProps = {
  setCurrentPage
}

const mapStateToProps = (state) => ({
  tours: state.tours
})

export default connect(mapStateToProps, mapDispatchToProps)(Tours)
