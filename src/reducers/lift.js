import { ADD_LIFT } from '../actions'

const lifts = (state = [], action) => {

  if(state.length === 0) {
    let savedData = localStorage.getItem('lifts')
    if(savedData) {
      state = JSON.parse(savedData)
    }
  }

  switch(action.type) {
    case ADD_LIFT:
      let newState = [
        ...state,
        {
          id: action.id,
          name: action.name,
        }
      ]
      localStorage.setItem('lifts', JSON.stringify(newState))
      return newState
    default:
      return state
  }
}
export default lifts