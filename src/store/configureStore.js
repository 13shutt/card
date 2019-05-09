import { applyMiddleware, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createReducer from './reducers'
 
export default function configureStore(history) {
  const middlewares = [thunk, routerMiddleware(history)];
  const enhancers = composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(createReducer(history), enhancers)
}