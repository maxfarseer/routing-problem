import React, { Component } from 'react'

export default class ReportContainer extends Component {
  render() {
    return (
      <div className='report-container'>
        <h4>Report container</h4>
        {this.props.children}
      </div>
    )
  }
}
