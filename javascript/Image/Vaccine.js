'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Vaccine = ({sigImage, imageWidth}) => {
  return (
    <div ref={sigImage}>
      <div
        style={{
          textAlign: 'center',
        }}>
        <img
          src="./img/vaccinate.jpg"
          style={{width: imageWidth.toString() + '%'}}
        />
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
  imageWidth: PropTypes.number,
}

export default Vaccine
