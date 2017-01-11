import React, { PropTypes, Component } from 'react';
import styles from '../../stylesheets/containers/home/top.css'

class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        {
        //state中のオブジェクトをループさせて<li>要素を描画。stateは selector() メソッドで指定しているものがpropsとして渡ってくる
        this.props.state.storedDatas.map((obj) =>
          <div key={obj.id}>
            <img src={obj.image} className={styles.image} /><br />
            {obj.text}
            <div>
                <span>いいね！合計：{obj.good}</span>
                <span>いまいち合計：{obj.bad}</span>
            </div>
          </div>
        )
        }
      </div>
    );
  }
}

export default Main;