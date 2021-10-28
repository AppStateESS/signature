'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

/** Currently not in use but kept just in case */

const SourceView = ({updateSource, sigSource, copy}) => {
  return (
    <div>
      <h3>Source</h3>
      <button onClick={updateSource}>Update source below</button>
      <div
        style={{border: '1px solid #333', padding: '6px', minHeight: '100px'}}>
        {sigSource}
      </div>
      <p>
        Pasting this code will not work in an editor unless it has a source
        mode.
      </p>
      <button onClick={copy}>Copy HTML</button>
    </div>
  )
}

SourceView.propTypes = {
  updateSource: PropTypes.func,
  sigSource: PropTypes.object,
  copy: PropTypes.func,
}

export default SourceView
