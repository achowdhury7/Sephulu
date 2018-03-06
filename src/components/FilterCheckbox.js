import React, { Component } from 'react'

const FilterCheckbox = (props) => {
  return (
    <label>
      {props.label}
      <input name={props.name} type="checkbox" onChange={props.onChange} />
    </label>
  )
}

export default FilterCheckbox