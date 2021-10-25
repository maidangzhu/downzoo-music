import * as actionTypes from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  singerList: [],
  enterLoading: true, // 控制进场loading
  pullUpLoading: false, // 控制上拉加载动画
  pullDownLoading: false, // 控制下拉加载动画
  pageCount: 0 // 这里是当前页数，我们即将实现分页功能
});

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_ALPHA:
      return state.merge({
        'alpha': action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_CATOGORY:
      return state.merge({
        'category': action.data,
        listOffset: 0,
        enterLoading: true
      });
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case actionTypes.CHANGE_LIST_OFFSET:
      return state.set('listOffset', action.data);
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', action.data);
    case actionTypes.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', action.data);
    default:
      return state;
  }
}
