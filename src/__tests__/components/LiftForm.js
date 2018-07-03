import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiftForm from '../../components/LiftForm'


describe(`LiftForm`, () => {

  // snapshot
  it(`should render`, () => {
    const mockAddLift = jest.fn()
    const wrapper = shallow(<LiftForm addLift={mockAddLift}/>)
    const component = wrapper
    expect(toJson(component)).toMatchSnapshot()
  })


  // form
  it(`should call addLift on submit`, () => {
    const mockAddLift = jest.fn()
    const preventDefault = jest.fn()
    const wrapper = shallow(<LiftForm addLift={mockAddLift}/>)
    const component = wrapper

    component.find('form').simulate('submit', { preventDefault })
    expect(mockAddLift.mock.calls.length).toEqual(1)
  })

})