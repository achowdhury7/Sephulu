import React from 'react'
import { shallow, mount, render } from 'enzyme'

import { PageContent } from '../PageContent'

test('render page content', () => {
  const mockPaginationLinks = {
    next: '/mockLink',
    prev: '/mockLink'
  }
  const wrapper = shallow(
    <PageContent paginationLinks={mockPaginationLinks} />
  )

  expect(wrapper).toMatchSnapshot()
})