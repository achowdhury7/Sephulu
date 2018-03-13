import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import classNames from 'classnames/bind'

export class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.handleShowModal = this.handleShowModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)

    this.state = {
      showModal: false
    }
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  handleShowModal() {
    this.setState({ showModal: true })
  }

  render() {
    const product = this.props.products[this.props.productId]
    const productPriceClasses = classNames({
      'product-price': true,
      'cancelled': product.under_sale
    })
    const productSalePriceClasses = classNames({
      'product-sale-price': true,
      hidden: !product.under_sale
    })

    return (
      <div className="product-container">
        <div className="product-image"></div> 
        <div className="product-desc">
          <div className="product-name"><a onClick={this.handleShowModal}>{product.name}</a></div>
          <div className="product-category"><span>{product.category}</span></div>
          <div className="product-price-container">
            <span className={productSalePriceClasses}>${(product.sale_price/100).toFixed(2)}</span>
            <span className={productPriceClasses}>${(product.price/100).toFixed(2)}</span>
          </div>
        </div> 
        <Modal show={this.state.showModal} onHide={this.state.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{product.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="product-modal-image-container"></div>
            <div className="product-modal-desc-container"></div>
          </Modal.Body>
        </Modal>
      </div>
      
    )
  }
}

const mapStateToProps = state => ({
  products: state.app.products.byId
})


export default connect(
  mapStateToProps
)(ProductCard)