import React, { Component } from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

class PageSizeDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeKey: '25'
    }

    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(key) {
    if (this.state.activeKey != key) {
      this.setState({
        activeKey: key
      })
  
      if (this.props.handleSelect) this.props.handleSelect(key)
    }
  }

  render() {
    const menuItems = this.props.menuItems.map(item => (
      <MenuItem key={item} eventKey={item}>{item}</MenuItem>
    ))

    return (
      <DropdownButton
        id="page-size"
        title={this.state.activeKey}
        onSelect={this.handleSelect}
      >
        {menuItems}
      </DropdownButton>
    )
  }
}

export default PageSizeDropdown
