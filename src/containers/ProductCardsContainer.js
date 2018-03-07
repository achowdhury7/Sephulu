import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filterActions, productActions } from '../actions'
import { ProductCard } from '../components'


class ProductCardsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const listItems = this.props.productIds.map(id => (
      <li className="product-list-item" key={id}><ProductCard productId={id} /></li>
    ))
    return (
      <ul className="product-list">{listItems}</ul>
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
  productIds: Object.keys(state.app.products.byId)
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCardsContainer)

