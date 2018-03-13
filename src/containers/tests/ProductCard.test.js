import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { ProductCard } from '../ProductCard'

let wrapper

beforeEach(() => {
  const mockProducts = {
    1: { id: '1', name: 'product1', category: 'product', under_sale: true } 
  }
  const mockProductId = '1'
  wrapper = shallow(
    <ProductCard products={mockProducts} productId={mockProductId} />
  )
})

test('render product card', () => {
  expect(wrapper).toMatchSnapshot()
})

test('when product.under_sale is true', () => {
  expect(wrapper.find('span.product-price').is('.cancelled')).toEqual(true)
})