'use strict'
import React from 'react'
import Swoop from './Swoop'
import BlockA from './BlockA'
import Vaccine from './Vaccine'
import AppState from './AppState'
import PropTypes from 'prop-types'

const Image = ({info, sigImage}) => {
  const {
    imageType,
    imageWidth,
    fontSize,
    department,
    fontTop,
    lineHeight,
    imagePosition,
  } = info
  switch (imageType) {
    case 0:
      return <span></span>
    case 1:
      return (
        <Swoop
          {...{
            sigImage,
            fontSize,
            department,
            fontTop,
            lineHeight,
            imagePosition,
            imageType,
            imageWidth,
          }}
        />
      )
    case 2:
      return (
        <BlockA
          {...{
            sigImage,
            fontSize,
            department,
            fontTop,
            lineHeight,
            imagePosition,
            imageType,
            imageWidth,
          }}
        />
      )
    case 3:
      return (
        <Vaccine
          {...{
            sigImage,
            fontSize,
            department,
            fontTop,
            lineHeight,
            imagePosition,
            imageType,
            imageWidth,
          }}
        />
      )
    case 4:
      return (
        <AppState
          {...{
            sigImage,
            fontSize,
            department,
            fontTop,
            lineHeight,
            imagePosition,
            imageType,
            imageWidth,
          }}
        />
      )
  }
}

Image.propTypes = {info: PropTypes.object, sigImage: PropTypes.object}

export default Image
