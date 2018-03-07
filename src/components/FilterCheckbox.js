import React, { Component } from 'react'

const FilterCheckbox = (props) => {
  return (
    <label className={props.labelClass}>
      <input name={props.name} type="checkbox" onChange={props.onChange} />
      {props.label}
    </label>
  )
}

export default FilterCheckbox