import { ADD_LIFT_RESULT } from '../actions'

const liftResults = (state = [], action) => {

  if(state.length === 0) {
    let savedData = localStorage.getItem('results')
    if(savedData) {
      state = JSON.parse(savedData)
    }
  }

  switch(action.type) {
    case ADD_LIFT_RESULT:
      let newState = [
        ...state,
        {
          id: action.id,
          liftId: action.liftId,
          weight: action.weight,
          date: action.date
        }
      ]
      localStorage.setItem('results', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
export default liftResults