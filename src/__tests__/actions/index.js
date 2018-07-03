import configureStore from 'redux-mock-store'
import { ADD_LIFT, addLift, ADD_LIFT_RESULT, addLiftResult } from '../../actions'

const mockStore = configureStore()
const store = mockStore()


describe(`test redux actions`, () => {

  beforeEach(() => {
    store.clearActions()
  })


  // addLift

  describe(`addLift`, () => {

    it(`dispatches the correct action and payload`, () => {
      const lift = {
        type: ADD_LIFT,
        id: 0,
        name: 'Squat'
      }
      store.dispatch(addLift(lift))
      expect(store.getActions()).toEqual([lift])
    })

  })


  // addLiftResult

  describe(`addLiftResult`, () => {

    it(`dispatches the correct action and payload`, () => {
      const liftResult = {
        type: ADD_LIFT_RESULT,
        id: 0,
        liftId: 0,
        weight: 100,
        date: '7/1/2018'
      }
      store.dispatch(addLiftResult(liftResult))
      expect(store.getActions()).toEqual([liftResult])
    })

  })

})