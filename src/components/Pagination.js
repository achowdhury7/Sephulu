import React, { Component } from 'react'
import { Pager } from 'react-bootstrap'

const Pagination = (props) => {
  return (
    <Pager onSelect={props.handleSelect}>
      <Pager.Item href="#" eventKey="prev" disabled={!props.hasPrev}>Previous</Pager.Item>
      <Pager.Item href="#" eventKey="next" disabled={!props.hasNext}>Next</Pager.Item>
    </Pager>
  )
}

export default Pagination
