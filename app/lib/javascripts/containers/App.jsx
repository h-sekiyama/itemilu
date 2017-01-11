/* ライブラリのインポート */
import React, { PropTypes, Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../../stylesheets/containers/home/top.css'
import '../../stylesheets/sanitize.css'
import '../../stylesheets/base.css'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  shouldComponentUpdate() {
    // 全体的なfilter処理はここでやる
    return true
  }

  getGlobalClass(pathname) {
    if (pathname === '/') {
      return 'scene_dashboard'
    }
    const names = pathname.split('/')
    let sceneName = ''
    names.forEach((name, idx) => {
      if (!!name) {
        sceneName += name
        if (idx < names.length - 1) {
          sceneName += '_'
        }
      }
    })
    return `scene_${sceneName}`
  }

  render() {
    const { children, location } = this.props;
    const sceneName = this.getGlobalClass(location.pathname)
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={styles.home}>
          <Header />
          {children}
          <Footer location={location} />
        </div>
      </MuiThemeProvider>
    )

  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default App