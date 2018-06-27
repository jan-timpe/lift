import { ADD_LIFT } from '../actions'

const lift = (state = [], action) => {
  switch(action.type) {
    case ADD_LIFT:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          history: action.history
        }
      ]
    default:
      return state
  }
}
export default lift