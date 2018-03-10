import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { filterActions, productActions } from '../actions'
import { ProductCard } from '../containers'


class ProductCardsContainer extends Component {
  render() {
    const listItems = this.props.productIds.map(id => (
      <li className="product-list-item" key={id}><ProductCard productId={id} /></li>
    ))

    return (
      <ul className="product-list">{listItems}</ul>
    )
  }
}

const mapStateToProps = state => ({
  productIds: state.app.products.allIds
})


export default connect(
  mapStateToProps
)(ProductCardsContainer)

