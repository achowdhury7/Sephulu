import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { FilterContainer } from '../containers'

class PageContent extends Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.state = {
      tab: 'books'
    }
  }

  handleSelect(key) {
    this.setState({
      tab: key
    })
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4} className="sidebar">
            <FilterContainer />
          </Col>
          <Col xs={12} md={8} className="main"></Col>
        </Row>
      </Grid>
    )
  }
}

export default PageContent
