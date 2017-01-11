require("whatwg-fetch");

let data = {};

/*
  Action Creator:
  Appコンポーネント (src/App.js) から呼ばれる Action Creator群
  App.jsから呼ばれ、Action Creator内部で生成されたオブジェクトはreducer (./reducers) に渡される。
*/

//addText (Action Creator) : Appコンポーネント (App.js) でAddボタンを呼び出した時に呼ばれる。
// type (何のアクションなのかを示す定数であり必須) とApp.jsから渡されたテキストを包含したオブジェクトを return する。
export const FETCH_EVENTS = 'FETCH_EVENTS';
export function fetch_events() {
  return {
    type: FETCH_EVENTS,
    data: data
  };
}

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export function receive_events(data) {
  return {
    type: RECEIVE_EVENTS,
    data: data
  };
}

export const RETURN_EVENTS = 'RETURN_EVENTS';
export const returnEvents = function() {
  return (dispatch, getState) => {
    dispatch(fetch_events());
    return fetch(
      'http://localhost:3000/home/top.json'
    ).then(res => {
      return res.json()
    }).then(json => {
      dispatch(receive_events(json));
    })
  }
}