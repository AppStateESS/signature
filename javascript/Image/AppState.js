'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const AppState = ({sigImage, imageWidth}) => {
  return (
    <div ref={sigImage}>
      <div
        style={{
          textAlign: 'center',
        }}>
        <img
          src="./img/app-state-logo.png"
          style={{width: imageWidth.toString() + '%'}}
        />
      </div>
    </div>
  )
}

AppState.propTypes = {
  sigImage: PropTypes.object,
  fontSize: PropTypes.number,
  department: PropTypes.string,
  fontTop: PropTypes.number,
  lineHeight: PropTypes.number,
  imageWidth: PropTypes.number,
}

export default AppState
