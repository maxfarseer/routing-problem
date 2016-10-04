import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'

export default class CaptionsContainer extends Component {
  render() {
    return (
      <div>
        <div className='row row-margin'>
          <div className='col-md-3'>
            <p>Captions container</p>
            <FormattedMessage id={'language'} defaultMessage={'Language'} />
          </div>
        </div>
      </div>
    )
  }
}
