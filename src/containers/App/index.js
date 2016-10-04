import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'react-virtualized/styles.css'
import './react-virtualized-custom.scss'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-select/dist/react-select.css'
import './reset.css'
import './styles.scss'

class App extends Component {
  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ //eslint-disable-line no-unused-vars

})

export default connect(mapStateToProps)(App)
