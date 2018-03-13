import React from 'react'
import { shallow, mount, render } from 'enzyme'

import SortMenu from '../SortMenu'

let wrapper

beforeEach(() => {
  const menuItems = ['a', 'b', 'c']
  wrapper = mount(
    <SortMenu menuItems={menuItems} />
  )
})

test('render a nav menu', () => {
  expect(wrapper).toMatchSnapshot()
})

test('set `activeKey` on menu item click', () => {
  const firstChildKey = wrapper.find('NavItem').first().prop('eventKey')

  expect(wrapper).toMatchSnapshot()

  wrapper.find('a').first().simulate('click')
  expect(wrapper.state('activeKey')).toEqual(firstChildKey)
})
