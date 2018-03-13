import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Pagination from '../Pagination'

test('render a pagination bar', () => {
  const wrapper = shallow(
    <Pagination />
  )
  expect(wrapper).toMatchSnapshot()
})

test('disable `previous` button if `hasPrev` is false', () => {
  const wrapper = mount(
    <Pagination hasPrev={false} />
  )

  expect(wrapper).toMatchSnapshot()

  expect(wrapper.findWhere(n => n.prop('eventKey') === 'prev').prop('disabled')).toEqual(true)
})

test('disable `next` button if `hasNext` is false', () => {
  const wrapper = mount(
    <Pagination hasNext={false} />
  )

  expect(wrapper).toMatchSnapshot()

  expect(wrapper.findWhere(n => n.prop('eventKey') === 'next').prop('disabled')).toEqual(true)
})