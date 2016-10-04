import React, { Component } from 'react'

export default class AuthenticatedContainer extends Component {
  render() {
    return (
      <div className='authenticated-container'>
        {this.props.children}
      </div>
    )
  }
}
