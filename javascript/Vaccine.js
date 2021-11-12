'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Vaccine = ({sigImage}) => {
  return (
    <div ref={sigImage}>
      <div
        style={{
          width: '300px',
          textAlign: 'center',
        }}>
        <img src="./img/vaccinate.jpg" style={{width: '300px'}} />
      </div>
    </div>
  )
}

Vaccine.propTypes = {
  sigImage: PropTypes.object,
  fontSize: PropTypes.number,
  department: PropTypes.string,
  fontTop: PropTypes.number,
  lineHeight: PropTypes.number,
}

export default Vaccine
