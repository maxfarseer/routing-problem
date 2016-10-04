import React, { Component } from 'react'
import { Link } from 'react-router'

export default class ActivitesContainer extends Component {
  render() {
    return (
      <div>
        <div className='row row-margin'>
          <div className='col-md-12'>
            <p>Activities container</p>
            <Link to='/activities/1'>Link to id 1</Link>
          </div>
        </div>
      </div>
    )
  }
}
