import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PanelGroup, Panel } from 'react-bootstrap'
import Collapsible from 'react-collapsible'

import { filterActions, productActions } from '../actions'
import { Header, PageContent, FilterCheckbox } from '../components'


class FilterContainer extends Component {
  constructor(props) {
    super(props)

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
  }

  handleCheckboxChange(event) {
    const target = event.target
    if (target.checked)
      this.props.actions.setCategoryFilter()
  }

  render() {
    const filterCheckBoxes = []

    // this.props.categories.map(category => {
    //   <FilterCheckbox label={category} name={category} 
    // })
    return (
      <div>
        <Collapsible trigger="Categories">

        </Collapsible>
        <Collapsible trigger="Price-Range">wqeqwe</Collapsible>
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
  priceRange: state.app.priceRange
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterContainer)

