import React, { PropTypes, Component } from 'react';
import styles from '../../stylesheets/containers/home/top.css'
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Buttons extends Component {
  render() {
    return (
      <div className={styles.buttons}>
        <RaisedButton
          label="取得"
          secondary={true}
          style={style}
          className={styles.fetch_button}
          onClick={(e) => this.onfetchEvents(e)}
        />
      </div>
    );
  }

  onfetchEvents(e) {
    this.props.returnEvents()
  }
}

Buttons.propTypes = {
  returnEvents: PropTypes.func.isRequired
};

export default Buttons;
