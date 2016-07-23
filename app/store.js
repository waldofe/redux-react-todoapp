import { createStore } from 'redux'
import todoApp from './todoApp'

let store = createStore(todoApp)

export default store;

