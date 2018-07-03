import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import Lift from '../../components/Lift'

const mockStore = configureStore()

const initialState = {
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
}

const store = mockStore(initialState)

describe(`Lift`, () => {

  // snapshot
  it(`should render`, () => {
    const wrapper = shallow(
      <Lift store={store} lift={store.getState().lifts[0]} />)
    const component = wrapper.dive()
    expect(toJson(component)).toMatchSnapshot()
  })


  // expands when clicked

  it(`should hide expanded when clicked`, () => {
    const wrapper = shallow(
      <Lift store={store} lift={store.getState().lifts[0]} />)
    const component = wrapper.dive()

    expect(component.find('.expanded').exists()).toEqual(false)
    
  })

  it(`should show expanded when clicked`, () => {
    const wrapper = shallow(
      <Lift store={store} lift={store.getState().lifts[0]} />)
    const component = wrapper.dive()
    
    component.find('.clickable').simulate('click')
    expect(component.find('.expanded').exists()).toEqual(true)
  })

})