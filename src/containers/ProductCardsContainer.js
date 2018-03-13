import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { PulseLoader } from 'react-spinners'

import { filterActions, productActions } from '../actions'
import { ProductCard } from '../containers'


export class ProductCardsContainer extends Component {
  render() {
    if (this.props.isFetching) {
      return (
        <div className="product-list-loader">
          <PulseLoader loading={this.props.isFetching} />
        </div>    
      )
    } else {
      const listItems = this.props.productIds.map(id => (
        <li className="product-list-item" key={id}><ProductCard productId={id} /></li>
      ))
  
      return (
        <ul className="product-list">{listItems}</ul>
      )
    }
  }
}

const mapStateToProps = state => ({
  productIds: state.app.products.allIds,
  isFetching: state.app.products.isFetching
})


export default connect(
  mapStateToProps
)(ProductCardsContainer)

