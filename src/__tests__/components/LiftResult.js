import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiftResult from '../../components/LiftResult'


describe(`LiftResult`, () => {

  // snapshot
  it(`should render`, () => {
    const result = {
      id: 0,
      liftId: 0,
      weight: 200,
      date: '7/1/2018'
    }
    const wrapper = shallow(<LiftResult result={result} />)
    const component = wrapper
    expect(toJson(component)).toMatchSnapshot()
  })

})