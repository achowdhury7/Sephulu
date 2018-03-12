import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { productActions, filterActions, sortActions } from '../actions'
import { Pagination, PageSizeDropdown, SortMenu } from '../components'
import { FiltersContainer, ProductCardsContainer } from '../containers'
import pagination from '../reducers/pagination';
import get from '../utils/api'

class PageContent extends Component {
  constructor(props) {
    super(props)
    this.handleSortMenuSelect = this.handleSortMenuSelect.bind(this)
    this.handlePageSizeSelect = this.handlePageSizeSelect.bind(this)
    this.handlePageSelect = this.handlePageSelect.bind(this)
  }

  handleSortMenuSelect(selection) {
    if (selection === 'price') {
      this.props.actions.setPriceAscending()
    } else if (selection === '-price') {
      this.props.actions.setPriceDescending()
    }
  }

  handlePageSizeSelect(selection) {
    this.props.actions.setPageSizeFilter(selection)
  }

  handlePageSelect(selection) {
    if (selection === 'next') {
      this.props.actions.fetchProducts('/', this.props.paginationLinks.next)
    } else if (selection === 'prev' && this.props.paginationLinks.prev) {
      this.props.actions.fetchProducts('/', this.props.paginationLinks.prev)
    }

    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }

  render() {
    const sortMenuItems = {
      'price': 'Price: Low to High',
      '-price': 'Price: High to Low'
    }
    const pageSizeMenuItems = [ 20, 25, 30]

    return (
      <Grid className="page-content-container" fluid>
        <Row>
          <Col xs={7} md={3} className="sidebar">
            <FiltersContainer />
          </Col>
          <Col xs={13} md={9} className="main">
            <div className="main-header">
              <div className="main-header-title">Products</div>
              <div className="main-header-options-container">
                <SortMenu menuItems={sortMenuItems} handleSelect={this.handleSortMenuSelect} />
                <div>View: <span><PageSizeDropdown menuItems={pageSizeMenuItems} handleSelect={this.handlePageSizeSelect} /></span></div>
              </div>
            </div>
            <div className="main-content">
              <ProductCardsContainer />
            </div>
            <div className="main-footer">
              <Pagination 
                handleSelect={this.handlePageSelect} 
                hasNext={this.props.paginationLinks.next}
                hasPrev={this.props.paginationLinks.prev} />
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
        productActions,
        filterActions,
        sortActions),
      dispatch
    )
  })

const mapStateToProps = state => ({
  paginationLinks: state.app.paginationLinks
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContent)
