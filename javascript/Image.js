'use strict'
import React from 'react'
import SigImage from './SigImage'
import BlockA from './BlockA'
import Vaccine from './Vaccine'
import PropTypes from 'prop-types'

const Image = ({info}) => {
  const {
    imageType,
    sigImage,
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
        <SigImage
          {...{
            sigImage,
            fontSize,
            department,
            fontTop,
            lineHeight,
            imagePosition,
            imageType,
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
          }}
        />
      )
  }
}

Image.propTypes = {info: PropTypes.object}

export default Image
