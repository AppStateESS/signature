'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Stack from './Layout/Stack'
import StackSplit from './Layout/StackSplit'
import FloatRight from './Layout/FloatRight'
import FloatLeft from './Layout/FloatLeft'

const SignatureView = ({sig, info, sigImage}) => {
  const floatPadding = 6
  const blockPadding = 6
  let width
  let view
  let padding
  switch (info.imagePosition) {
    case 0:
      view = <Stack {...{info, sigImage}} />
      padding = blockPadding.toString() + 'px'
      width = (info.blockSize + floatPadding * 2).toString() + 'px'
      break

    case 1:
      view = <FloatRight {...{info, sigImage}} />
      padding = floatPadding.toString() + 'px'
      width = (info.blockSize + floatPadding * 2).toString() + 'px'
      break

    case 2:
      view = <StackSplit {...{info, sigImage}} />
      padding = blockPadding.toString() + 'px'
      width = (info.blockSize + floatPadding * 2).toString() + 'px'
      break

    case 3:
      view = <FloatLeft {...{info, sigImage}} />
      padding = floatPadding.toString() + 'px'
      width = (info.blockSize + floatPadding * 2).toString() + 'px'
      break
  }
  return (
    <div
      className="d-flex justify-content-center mx-auto border "
      style={{
        width,
      }}>
      <div ref={sig}>{view}</div>
    </div>
  )
}

SignatureView.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default SignatureView
