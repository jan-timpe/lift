import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiftList from '../../components/LiftList'


describe(`LiftList`, () => {

  // snapshot
  it(`should render`, () => {
    const lifts = [{
      id: 0,
      name: 'Squat'
    }, {
      id: 1,
      name: 'Bench'
    }]
    const wrapper = shallow(<LiftList lifts={lifts} />)
    const component = wrapper
    expect(toJson(component)).toMatchSnapshot()
  })

})