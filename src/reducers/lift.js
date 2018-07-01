import { ADD_LIFT } from '../actions'

const lifts = (state = [], action) => {
  switch(action.type) {
    case ADD_LIFT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ]
    default:
      return state
  }
}
export default lifts