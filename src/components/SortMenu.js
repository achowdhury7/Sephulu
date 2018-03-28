import React, { Component } from 'react'
import { Nav, NavItem } from 'react-bootstrap'

class SortMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeKey: ''
    }
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key) {
    if (this.state.activeKey !== key) {
      this.setState({
        activeKey: key
      })
  
    if (this.props.handleSelect) this.props.handleSelect(key)
    }
  }

  render() {
    const menuItems = Object.keys(this.props.menuItems).map(key => (
        <NavItem className="sort-menu-item" key={key} eventKey={key} href="#">{this.props.menuItems[key]}</NavItem>
      )
    )

    return (
      <div className="sort-menu-container">
        <span>Sort By:</span>
        <span>
          <Nav bsStyle="pills" activeKey={this.state.activeKey} className="sort-menu" onSelect={this.handleSelect}>
            {menuItems}
          </Nav>
        </span>
      </div>
    )
  }
}

export default SortMenu