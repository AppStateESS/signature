'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const SigImage = ({sigImage, fontSize, department, fontTop, lineHeight}) => {
  return (
    <div style={{position: 'relative'}} ref={sigImage}>
      <div
        style={{
          width: '300px',
          height: '63px',
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
      <img src="./img/swoop.png" />
    </div>
  )
}

SigImage.propTypes = {
  sigImage: PropTypes.object,
  fontSize: PropTypes.number,
  department: PropTypes.string,
  fontTop: PropTypes.number,
  lineHeight: PropTypes.number,
}

export default SigImage
