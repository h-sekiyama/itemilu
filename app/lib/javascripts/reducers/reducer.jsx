import { RETURN_EVENTS } from '../actions/actions'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/*
  Reducer:
  ReducerはAction Creatorから渡されたデータに変更をもとに新しい state を返す。
  stateは Reducer が返した新しい state に更新され、View (Appコンポーネント) が新しい state を元に再描画される。
*/

// アプリ起動時のstate
let initialState = 
{
  "data": [
    {
      "date": "そのうち", 
      "id": 0, 
      "title": "test"
    },
    {
      "date": "そのうち2", 
      "id": 1, 
      "title": "test2"
    }
  ], 
  "isFetched": false
}


function returnEvents(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_EVENTS':
      return state
    case 'RECEIVE_EVENTS':
      //ADD_TEXTアクションが来た時は現状の state に新しく生成されるオブジェクトをプラスして state を返す
      // var currentEvents = state;
      // currentEvents.push(action.data);
      state = Object.assign({}, state, {isFetched: true, data: action.data});
      return state
    default:
      return state
  }
};

// entry.js内部で Provider コンポーネントにセットするデータストア. <Provider>以下でthis.props.stateの形でアクセス可能。
const rootReducer = combineReducers(
  {
    storedDatas : returnEvents,
    routing: routerReducer,
  }
)

export default rootReducer;