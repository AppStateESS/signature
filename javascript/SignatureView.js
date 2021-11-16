'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Stack from './Stack'
import StackSplit from './StackSplit'
import Float from './Float'

const SignatureView = ({sig, info, sigImage}) => {
  switch (info.imagePosition) {
    case 0:
      return (
        <div className="d-flex justify-content-center mx-auto">
          <Stack {...{info, sig, sigImage}} />
        </div>
      )
    case 1:
      return (
        <div className="d-flex justify-content-center mx-auto">
          <Float {...{info, sig, sigImage}} />
        </div>
      )
    case 2:
      return (
        <div className="d-flex justify-content-center mx-auto">
          <StackSplit {...{info, sig, sigImage}} />
        </div>
      )
  }
}

SignatureView.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default SignatureView
