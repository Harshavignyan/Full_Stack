import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import todoReducer from './todolist.reducer';

const reducer = combineReducers({counter:counterReducer,todos:todoReducer})
export default reducer;