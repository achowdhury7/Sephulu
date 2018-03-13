import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { FiltersContainer } from '../FiltersContainer'

let wrapper

beforeEach(() => {
  const mockCategories = ['a', 'b', 'c']
  const mockPriceRanges = [
    { min: 0, max: 10 },
    { min: 10, max: 20 },
    { min: 20, max: 30 },
  ]
  wrapper = shallow(
    <FiltersContainer categories={mockCategories} priceRanges={mockPriceRanges} />
  )
})

test('render filters', () => {  
  expect(wrapper).toMatchSnapshot()
})
