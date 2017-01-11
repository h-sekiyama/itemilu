/* ライブラリのインポート */
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider }  from 'react-redux'
import configureStore from './store/configureStore'

import App from './containers/App'
import Home from './containers/home/Home'
import CompanyWrapper from './containers/company/CompanyWrapper'
import Company from './containers/company/Index'
import CompanyDetail from './containers/company/Detail'

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

let rootElement = document.querySelector('#root');

render (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />

        <Route path="company" component={CompanyWrapper}>
          <IndexRoute component={Company} />
          <Route path="detail" component={CompanyDetail} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  // rootElement下にコンポーネントを生成
  rootElement
);
