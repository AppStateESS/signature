'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Stack from './Layout/Stack'
import StackSplit from './Layout/StackSplit'
import Float from './Layout/Float'

const SignatureView = ({sig, info, sigImage, floatWidth, blockWidth}) => {
  const floatPadding = 6
  const blockPadding = 6
  const width = blockWidth + floatPadding * 2
  switch (info.imagePosition) {
    case 0:
      return (
        <div
          className="d-flex justify-content-center mx-auto"
          style={{
            border: '1px solid #333',
            padding: blockPadding.toString() + 'px',
            width: width.toString() + 'px',
          }}
          ref={sig}>
          <Stack {...{info, sigImage, blockWidth}} />
        </div>
      )
    case 1:
      return (
        <div
          className="d-flex justify-content-center mx-auto"
          style={{
            border: '1px solid #333',
            padding: floatPadding.toString() + 'px',
            width: (floatWidth + floatPadding * 2).toString() + 'px',
          }}
          ref={sig}>
          <Float {...{info, sigImage, floatWidth}} />
        </div>
      )
    case 2:
      return (
        <div
          className="d-flex justify-content-center mx-auto"
          style={{
            border: '1px solid #333',
            padding: '6px',
            width: width.toString() + 'px',
          }}
          ref={sig}>
          <StackSplit {...{info, sigImage}} />
        </div>
      )
  }
}

SignatureView.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
  floatWidth: PropTypes.number,
  blockWidth: PropTypes.number,
}

export default SignatureView
