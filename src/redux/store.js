import { applyMiddleware, createStore } from 'redux'
import Reducer from './reducers/Reducer'
import thunk from 'redux-thunk'
debugger
const store = createStore(Reducer, applyMiddleware(thunk))
export default store
