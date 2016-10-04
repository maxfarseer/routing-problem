import React from 'react'
import { Route } from 'react-router'
import App from '../containers/App'
import AuthenticatedContainer from '../containers/AuthenticatedContainer'
import ActivitiesContainer from '../containers/ActivitiesContainer'
import CaptionsContainer from '../containers/CaptionsContainer'
import ReportContainer from '../containers/ReportContainer'
import CategoriesContainer from '../containers/CategoriesContainer'

export default function configRoutes(store) { //eslint-disable-line no-unused-vars
  return (
    <Route component={App}>

      <Route path='/' component={AuthenticatedContainer}>
        <Route component={ReportContainer}>
          <Route path='/activities' component={ActivitiesContainer} />
          <Route path='/activities/:id' component={CaptionsContainer} />
          <Route path='/categories' component={CategoriesContainer} />
        </Route>
      </Route>

    </Route>
  )
}
