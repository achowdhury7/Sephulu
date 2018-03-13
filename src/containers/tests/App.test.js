import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { App } from '../App'

test('render app', () => {
  const mockActions = {
    setProductsFetching: jest.fn(),
    fetchProducts: jest.fn(),
    setPriceRanges: jest.fn(),
    setCategories: jest.fn()
  }
  const wrapper = shallow(
    <App actions={mockActions} />
  )
  expect(wrapper).toMatchSnapshot()
})