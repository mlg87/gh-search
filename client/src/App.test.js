import React from 'react'
import App from './App'

describe('Navbar', () => {
  let component

  beforeEach(() => {
    if (component) component.unmount()
  })

  test('renders correctly', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
