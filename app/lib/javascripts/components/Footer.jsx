import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router'
import styles from '../../stylesheets/containers/layout/footer.css'

class Footer extends Component {
  render() {
    const {location} = this.props;
    return (
      <div className={styles.footer}>
        <Link to="/" className={location.pathname == '/' ? `${styles.item} ${styles.is_current}` : styles.item}>
          イベント検索
        </Link>
        <Link to="company" className={location.pathname == '/company' || location.pathname == '/company/detail' ? `${styles.item} ${styles.is_current}` : styles.item}>
          会社情報
        </Link>
      </div>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
