import { combineReducers } from "redux-immutable";
import { reducer as recommendReducer } from './recommend/reducer';
import { reducer as singersReducer } from './singers/reducer';


export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer
});
