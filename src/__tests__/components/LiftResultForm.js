import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiftResultForm from '../../components/LiftResultForm'

describe(`LiftResultForm`, () => {

  // snapshot
  it(`should render`, () => {
    const mockAddLiftResult = jest.fn()
    const wrapper = shallow(<LiftResultForm addLiftResult={mockAddLiftResult} />)
    const component = wrapper
    expect(toJson(component)).toMatchSnapshot()
  })

  
  // form
  it(`should call addLiftResult on submit`, () => {
    const mockAddLiftResult = jest.fn()
    const preventDefault = jest.fn()
    const wrapper = shallow(<LiftResultForm addLiftResult={mockAddLiftResult} />)
    const component = wrapper

    component.find('form').simulate('submit', { preventDefault })
    expect(mockAddLiftResult.mock.calls.length).toEqual(1)
  })

})