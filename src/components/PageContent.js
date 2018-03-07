import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import { FiltersContainer, ProductCardsContainer } from '../containers'

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
      <Grid className="page-content-container" fluid>
        <Row>
          <Col xs={7} md={3} className="sidebar">
            <FiltersContainer />
          </Col>
          <Col xs={13} md={9} className="main">
            <ProductCardsContainer />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default PageContent
