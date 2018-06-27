import { combineReducers } from 'redux'
import liftResult from './liftResult'
import lift from './lift'

export default combineReducers({
  liftResult,
  lift
})