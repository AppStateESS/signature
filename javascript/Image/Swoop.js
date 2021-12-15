'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Swoop = ({
  sigImage,
  fontSize,
  department,
  fontTop,
  lineHeight,
  imageWidth,
}) => {
  return (
    <div style={{position: 'relative'}} ref={sigImage}>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          textAlign: 'center',
          fontFamily: 'Times New Roman, Times, Serif',
          top: `${fontTop}px`,
          lineHeight: lineHeight + 'px',
          fontSize,
        }}>
        {department.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          )
        })}
      </div>
      <div style={{textAlign: 'center'}}>
        <img
          src="./img/swoop.png"
          style={{width: imageWidth.toString() + '%'}}
        />
      </div>
    </div>
  )
}

Swoop.propTypes = {
  sigImage: PropTypes.object,
  fontSize: PropTypes.number,
  department: PropTypes.string,
  fontTop: PropTypes.number,
  lineHeight: PropTypes.number,
  imageWidth: PropTypes.number,
}

export default Swoop
