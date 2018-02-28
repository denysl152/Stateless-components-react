import React from 'react'
import PropTypes from 'prop-types'

const Dump = ({ data }) => {
  console.log(typeof data)
  return (
    <div>
      <p>{data} </p>
    </div>
  )
}
Dump.propTypes = {
  data: PropTypes.string
}
export default Dump
