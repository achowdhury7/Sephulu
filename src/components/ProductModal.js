import React, { Component } from 'react'
import { Button, Glyphicon, Modal } from 'react-bootstrap'
import classNames from 'classnames/bind'

const ProductModal = (props) => {
  const product = props.product
  const productPriceClasses = classNames({
    'product-price': true,
    'cancelled': product.under_sale
  })
  const productSalePriceClasses = classNames({
    'product-sale-price': true,
    hidden: !product.under_sale
  })
  return (
    <Modal show={props.show}>
      <Button onClick={props.onHide}><Glyphicon glyph="remove" /></Button>
      <Modal.Body className="product-modal-body clearfix">
        <div className="product-modal-image-container"></div>
        <div className="product-modal-desc-container">
          <div className="product-modal-desc-name"><span>{product.name}</span></div>
          <div className="product-modal-desc-category"><span>{product.category}</span></div>
          <div className="product-price-container">
            <span className={productSalePriceClasses}>${(product.sale_price/100).toFixed(2)}</span>
            <span className={productPriceClasses}>${(product.price/100).toFixed(2)}</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ProductModal
