'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import Stack from './Stack'
import Float from './Float'

const SignatureView = ({sig, info, sigImage}) => {
  return info.imagePosition === 0 ? (
    <div className="d-flex justify-content-center mx-auto">
      <Stack {...{info, sig, sigImage}} />
    </div>
  ) : (
    <div className="d-flex justify-content-center mx-auto">
      <Float {...{info, sig, sigImage}} />
    </div>
  )
}

SignatureView.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default SignatureView
