import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import EventList from '../../components/EventList';
import Buttons from '../../components/Buttons';
import styles from '../../../stylesheets/containers/home/top.css'

/* Action Creatorのインポート */
import * as returnEvents from '../../actions/actions'

class Home extends Component {

  render() {
    return (
      <div className={styles.main}>
        <EventList state={this.props.state} />
        <Buttons returnEvents={this.props.actions.returnEvents} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(returnEvents, dispatch)
  };
}

Home.propTypes = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)