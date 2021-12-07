'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const BlockA = ({sigImage, fontSize, department, lineHeight, imageWidth}) => {
  return (
    <div ref={sigImage}>
      <div
        style={{
          textAlign: 'center',
          fontFamily: 'Times New Roman, Times, Serif',
          lineHeight: lineHeight + 'px',
          fontSize,
        }}>
        <div style={{textAlign: 'center'}}>
          <img
            src="./img/block-a.png"
            style={{width: imageWidth.toString() + 'px'}}
          />
        </div>
        {department.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          )
        })}
      </div>
    </div>
  )
}

BlockA.propTypes = {
  sigImage: PropTypes.object,
  fontSize: PropTypes.number,
  department: PropTypes.string,
  fontTop: PropTypes.number,
  lineHeight: PropTypes.number,
  imageWidth: PropTypes.number,
}

export default BlockA
