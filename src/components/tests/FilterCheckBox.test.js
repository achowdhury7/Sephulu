import React from 'react'
import { shallow, mount, render } from 'enzyme'

import FilterCheckbox from '../FilterCheckbox'

test('render a checkbox', () => {
  const wrapper = shallow(
    <FilterCheckbox />
  )
  expect(wrapper).toMatchSnapshot()
})

test('render a checkbox label', () => {
  const wrapper = mount(
    <FilterCheckbox label="testlabel" />
  )
  expect(wrapper.prop('label')).toEqual('testlabel')
})

test('pass selected value to onChange handler', () => {
  const value = {}
  const onChange = jest.fn()
  const wrapper = shallow(
    <FilterCheckbox onChange={onChange} />
  )

  expect(wrapper).toMatchSnapshot()

  wrapper.find('input').simulate('change', value)
  expect(onChange).toBeCalledWith(value)
})
