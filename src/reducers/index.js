import { combineReducers } from 'redux'
import liftResults from './liftResult'
import lifts from './lift'

export default combineReducers({
  liftResults,
  lifts
})