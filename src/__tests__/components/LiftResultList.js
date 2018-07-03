import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LiftResultList from '../../components/LiftResultList'

describe(`LiftResultList`, () => {

  // snapshot
  it(`should render`, () => {
    const results = [{
      id: 0,
      liftId: 0,
      weight: 200,
      date: '7/1/2018'
    }, {
      id: 1,
      liftId: 0,
      weight: 300,
      date: '7/2/2018'
    }]
    const wrapper = shallow(<LiftResultList results={results} />)
    const component = wrapper
    expect(toJson(component)).toMatchSnapshot()
  })

})