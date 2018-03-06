import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { productActions } from '../actions'
import { Header, PageContent } from '../components'


class App extends Component {
  componentDidMount() {
    this.props.actions.setProductsFetching()
    this.props.actions.fetchProducts()
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
      productActions),
      dispatch
    )
  })

const mapStateToProps = state => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
