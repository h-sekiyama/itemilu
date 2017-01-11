import React, { PropTypes, Component } from 'react';
import Event from './Event';
import styles from '../../stylesheets/containers/home/top.css'

class EventList extends Component {
  render() {
    return (
      <ul className={styles.main}>
        {this.props.state.storedDatas.data.map((obj, index) =>
          <Event {...obj}
                key={index} />
        )}
      </ul>
    );
  }
}

export default EventList;