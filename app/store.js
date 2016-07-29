import { createStore } from 'redux'
import mainReducer from './reducers/mainReducer'

let store = createStore(mainReducer);

export default store;

