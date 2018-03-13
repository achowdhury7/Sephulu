import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Header from '../Header'

test('render a header', () => {
  const wrapper = shallow(
    <Header />
  )
  expect(wrapper).toMatchSnapshot()
})