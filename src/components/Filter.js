import React from 'react';
import {filterChange} from '../reducers/filterReducer';
import {connect} from 'react-redux';
const Filter = (props) => {
  const handleChange = (event) => {
        props.filterChange(event.target.value);
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}
const mapDispatchToProps = {filterChange}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    filter: state.filter,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Filter)
