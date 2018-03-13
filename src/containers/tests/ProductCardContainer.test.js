import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { ProductCardsContainer } from '../ProductCardsContainer'

test('render product cards container', () => {
  const mockProductIds = ['1', '2', '3']
  const wrapper = shallow(
    <ProductCardsContainer productIds={mockProductIds} isFetching={false} />
  )
  expect(wrapper).toMatchSnapshot()
})