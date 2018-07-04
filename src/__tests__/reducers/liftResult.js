import reducer from '../../reducers/liftResult'
import { ADD_LIFT_RESULT } from '../../actions'


describe(`LiftListContainer`, () => {

  // initial state
  it(`should return empty initial state`, () => {
    expect(reducer(undefined, {})).toEqual([])
  })


  // add lift result
  it(`should handle ADD_LIFT_RESULT`, () => {
    const action = {
      type: ADD_LIFT_RESULT,
      id: 0,
      liftId: 0,
      weight: 200,
      date: '7/1/2018'
    }

    expect(reducer([], action)).toEqual([{
      id: 0,
      liftId: 0,
      weight: 200,
      date: '7/1/2018'
    }])
  })

})