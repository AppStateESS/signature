'use strict'
import React from 'react'
import SigImage from './SigImage'
import BlockA from './BlockA'
import Vaccine from './Vaccine'
import PropTypes from 'prop-types'

const Image = ({info, sigImage, imageWidth}) => {
  const {imageType, fontSize, department, fontTop, lineHeight, imagePosition} =
    info
  switch (imageType) {
    case 0:
      return <span></span>
    case 1:
      return (
        <SigImage
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
  }
}

Image.propTypes = {info: PropTypes.object, sigImage: PropTypes.object}

export default Image
