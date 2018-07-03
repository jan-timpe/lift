import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import LiftListContainer from '../../components/LiftListContainer'


const mockStore = configureStore()

const initialState = [{
  lifts: [{
    id: 0,
    name: 'Squat'
  }, {
    id: 1,
    name: 'Bench'
  }],
  liftResults: [{
    id: 0,
    liftId: 0,
    weight: 205,
    date: '7/1/2018'
  }]
}]

const store = mockStore(initialState)


describe(`LiftListContainer`, () => {

  it(`should render`, () => {
    const wrapper = shallow(<LiftListContainer store={store} />)
    const component = wrapper.dive()
    expect(toJson(component)).toMatchSnapshot()
  })

})