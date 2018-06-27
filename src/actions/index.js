let nextLiftId = 0
export const ADD_LIFT = 'ADD_LIFT'
export const addLift = (args) => {
  return {
    type: ADD_LIFT,
    id: nextLiftId++,
    name: args.name,
    history: [],
  }
}

let nextLiftResultId = 0
export const ADD_LIFT_RESULT = 'ADD_LIFT_RESULT'
export const addLiftResult = (args) => {
  return {
    type: ADD_LIFT_RESULT,
    id: nextLiftResultId++,
    liftId: args.liftId,
    weight: args.weight,
    date: args.date
  }
}