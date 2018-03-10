import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PanelGroup, Panel } from 'react-bootstrap'

import { filterActions, productActions } from '../actions'
import { Header, PageContent, FilterCheckbox } from '../components'


class FiltersContainer extends Component {
  constructor(props) {
    super(props)
    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handlePriceRangeChange = this.handlePriceRangeChange.bind(this)
  }

  handleCategoryChange(event) {
    const selectedCategory = event.target.name

    if (event.target.checked) {
      this.props.actions.selectCategoryFilter(selectedCategory)
    } else {
      this.props.actions.deselectCategoryFilter(selectedCategory)
    }
  }

  handlePriceRangeChange(event) {
    const selectedPriceRange = this.props.priceRanges.filter(range => range.min == event.target.name)[0]

    if (event.target.checked) {
      this.props.actions.selectPriceRangeFilter(selectedPriceRange)
    } else {
      this.props.actions.deselectPriceRangeFilter(selectedPriceRange)
    }
  }

  render() {
    const categoryCheckBoxes = this.props.categories.map(category => (
      <FilterCheckbox 
        key={category} 
        label={category} 
        labelClass="filter-checkbox" 
        name={category} 
        onChange={this.handleCategoryChange} />
    ))
    const priceRangeCheckboxes = this.props.priceRanges.map(priceRange => (
      <FilterCheckbox 
        labelClass="filter-checkbox" 
        key={priceRange.max + priceRange.min}
        label={`$${Math.ceil(priceRange.min/100)}-$${Math.floor(priceRange.max/100)}`}
        name={priceRange.min}
        onChange={this.handlePriceRangeChange} />
    ))
    
    return (
      <div>
        <div className="filter-container">
          <div className="filter-header">Categories</div>
          {categoryCheckBoxes}
        </div>
        <div className="filter-container" trigger="Price-Range">
          <div className="filter-header">Price</div>
          {priceRangeCheckboxes}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
      {},
      filterActions,
      productActions),
      dispatch
    )
  })

const mapStateToProps = state => ({
  categories: state.app.categories,
  filters: state.app.filters,
  priceRanges: state.app.priceRanges,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)

