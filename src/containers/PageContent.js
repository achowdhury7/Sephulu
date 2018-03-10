import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { sortActions } from '../actions'
import { SortMenu } from '../components'
import { FiltersContainer, ProductCardsContainer } from '../containers'

class PageContent extends Component {
  constructor(props) {
    super(props)
    this.handleSortMenuSelect = this.handleSortMenuSelect.bind(this)
  }

  handleSortMenuSelect(selection) {
    if (selection === 'price') {
      this.props.actions.setPriceAscending()
    } else if (selection === '-price') {
      this.props.actions.setPriceDescending()
    }
  }

  render() {
    const sortMenuItems = {
      'price': 'Price: Low to High',
      '-price': 'Price: High to Low'
    }
    return (
      <Grid className="page-content-container" fluid>
        <Row>
          <Col xs={7} md={3} className="sidebar">
            <FiltersContainer />
          </Col>
          <Col xs={13} md={9} className="main">
            <div className="main-header">
              <span className="main-header-title">Products</span>
              <span><SortMenu menuItems={sortMenuItems} handleSelect={this.handleSortMenuSelect} /></span>
            </div>
            <div className="main-content">
              <ProductCardsContainer />
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
        {},
        sortActions),
      dispatch
    )
  })

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContent)
