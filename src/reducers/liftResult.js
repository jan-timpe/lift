import { ADD_LIFT_RESULT } from '../actions'

const liftResult = (state = [], action) => {
  switch(action.type) {
    case ADD_LIFT_RESULT:
      return [
        ...state,
        {
          id: action.id,
          liftId: action.liftId,
          weight: action.weight,
          date: action.date
        }
      ]
    default:
      return state
  }
}
export default liftResult