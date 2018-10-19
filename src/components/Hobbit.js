import React from "react";

import { connect } from 'react-redux'

const Hobbit = props => {
  const { hobbit } = props
  const selected = false
  let stock
  if (false) {
    stock = 'something'
  } else {
    stock = 'something else'
  }

  return (
    <div className='card' style={selected ? {'borderColor':'cyan'} : {'borderColor':'red'} } onClick={() => console.log(hobbit)}>
      <img alt={hobbit.name} src={hobbit.image_url} />
      <h3> Name: {hobbit.name} </h3>
      <h3> Title: {hobbit.title} </h3>
      <h3> Field: {hobbit.field} </h3>
      <h3> Seniority: {hobbit.seniority} </h3>
      <h3> Position: {hobbit.position} </h3>
      <h3> Key Skill: {hobbit.key_skill} </h3>
      <h3> Employment Type: {hobbit.employment_type} </h3>
      {stock}
    </div>
  );
};



export default Hobbit
