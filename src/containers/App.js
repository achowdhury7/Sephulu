import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { categoryActions, productActions, priceRangeActions } from '../actions'
import { Header } from '../components'
import { PageContent } from '../containers'


class App extends Component {
  componentDidMount() {
    const defaultPriceRanges = [
      { min: 0, max: 2500},
      { min: 2501, max: 5000},
      { min: 5001, max: 7500},
      { min: 7501, max: 10000},
    ]
    const defaultCategories = [ 'tools', 'brushes', 'markup']

    this.props.actions.setProductsFetching()
    this.props.actions.fetchProducts()
    this.props.actions.setPriceRanges(defaultPriceRanges)
    this.props.actions.setCategories(defaultCategories)
  }
  render() {
    return (
      <div>
        <Header />
        <PageContent />
      </div> 
    )
  }
}

const mapDispatchToProps = dispatch => 
  ({
    actions: bindActionCreators(Object.assign(
        {},
        categoryActions,
        productActions, 
        priceRangeActions),
      dispatch
    )
  })

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
