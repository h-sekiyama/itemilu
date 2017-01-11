import React, { PropTypes, Component } from 'react';
import styles from '../../stylesheets/containers/home/top.css'

class Event extends Component {
  render() {
    return (
      <li>
        {this.props.date} {this.props.datetime}<a href={this.props.url} target="blank">{this.props.title}</a>
      </li>
    );
  }
}

export default Event;