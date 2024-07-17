import {createStore} from 'redux';
import reducer from './reducer/reducer';
var store = createStore(reducer);
// console.log(store);
export default store;