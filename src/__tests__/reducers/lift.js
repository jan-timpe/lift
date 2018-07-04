import reducer from '../../reducers/lift'
import { ADD_LIFT } from '../../actions'

describe(`lift reducer`, () => {

  // initial state
  it(`should return empty initial state`, () => {
    expect(reducer(undefined, {})).toEqual([])
  })


  // should handle adding lift
  it(`should handle ADD_LIFT`, () => {

    const action = {
      type: ADD_LIFT,
      id: 0,
      name: 'Squat'
    }

    expect(reducer([], action)).toEqual([{
      id: 0,
      name: 'Squat'
    }])
  })

})