import React from 'react';

const Filter = (props) => {

  return (
    <div>
      <input type="text" onChange={props.setSearchTerm} placeholder="Search by Name"/>
      <button value="name" onClick={props.setFilter}>Sort by Name</button>
      <button value="weight" onClick={props.setFilter}>Sort by Weight</button>
      <button value="greased" onClick={props.setFilter}>Show Only Greased</button>
    </div>
  )
}

export default Filter;
