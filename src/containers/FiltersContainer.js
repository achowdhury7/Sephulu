import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PanelGroup, Panel } from 'react-bootstrap'
import Collapsible from 'react-collapsible'

import { filterActions, productActions } from '../actions'
import { Header, PageContent, FilterCheckbox } from '../components'


class FiltersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      priceRanges: []
    }
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(event) {
    const target = event.target
    if (target.checked) {
      this.props.actions.selectCategoryFilter(target.name)
    } else {
      this.props.actions.deselectCategoryFilter(target.name)
    }
  }

  render() {
    const categoryCheckBoxes = this.props.categories.map(category => (
      <FilterCheckbox 
        key={category} 
        label={category} 
        labelClass="filter-checkbox" 
        name={category} 
        onChange={this.handleCheckboxChange} />
    ))
    const priceRangeCheckboxes = this.props.priceRanges.map(priceRange => (
      <FilterCheckbox 
        labelClass="filter-checkbox" 
        key={priceRange.max + priceRange.min}
        label={`$${(priceRange.min/100).toFixed(2)}-$${(priceRange.max/100).toFixed(2)}`}
        name={`range${(priceRange.min/100).toFixed(2)}-${(priceRange.max/100).toFixed(2)}`} />
    ))
    return (
      <div>
        <Collapsible className="filter-heading" trigger="Categories">
          {categoryCheckBoxes}
        </Collapsible>
        <Collapsible className="filter-heading" trigger="Price-Range">
          {priceRangeCheckboxes}
        </Collapsible>
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
  priceRanges: state.app.priceRanges
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FiltersContainer)

