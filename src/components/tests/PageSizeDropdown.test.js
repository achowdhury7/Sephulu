import React from 'react'
import { shallow, mount, render } from 'enzyme'

import PageSizeDropdown from '../PageSizeDropdown'

test('render a dropdown', () => {
  const menuItems = ['a', 'b', 'c']
  const wrapper = shallow(
    <PageSizeDropdown menuItems={menuItems} />
  )
  expect(wrapper).toMatchSnapshot()
})

test('set `activeKey` on menu item click', () => {
  const onSelect = jest.fn()
  const menuItems = ['a', 'b', 'c']
  const wrapper = mount(
    <PageSizeDropdown menuItems={menuItems} onSelect={onSelect} />
  )

  expect(wrapper).toMatchSnapshot()

  wrapper.find('a').first().simulate('click')
  expect(wrapper.state('activeKey')).toEqual('a')
})
