import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from './store/configureStore'
import Root from './containers/Root'

import { IntlProvider, addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import ru from 'react-intl/locale-data/ru'
import localeData from './locales/data.json'

addLocaleData([...en, ...ru])

let language

if (localStorage.getItem('app.lang')) {
  language = localStorage.getItem('app.lang')
} else {
  language = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage
}

const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]
localStorage.setItem('we.lang', languageWithoutRegionCode)

const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en

const store = configureStore()
const rootEl = document.getElementById('root')
const history = syncHistoryWithStore(browserHistory, store)

if (!window.intl) {
  require.ensure([
    'intl',
    'intl/locale-data/jsonp/en.js',
    'intl/locale-data/jsonp/ru.js',
  ], (require) => {
    require('intl')
    require('intl/locale-data/jsonp/en.js')
    require('intl/locale-data/jsonp/ru.js')
    ReactDOM.render(
      <IntlProvider locale={language} messages={messages}>
        <Root routerHistory={history} store={store} />
      </IntlProvider>,
      rootEl
    )
  })
} else {
  ReactDOM.render(
    <IntlProvider locale={language} messages={messages}>
      <Root routerHistory={history} store={store} />
    </IntlProvider>,
    rootEl
  )
}
