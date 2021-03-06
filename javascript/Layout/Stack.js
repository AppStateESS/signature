'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import CET from '../CET'
import SigText from '../SigText'

const Stack = ({info, sigImage}) => {
  const {site, tagLine, blockSize} = info
  const fullUrl = site ? `${site}.appstate.edu` : 'appstate.edu'
  return (
    <div
      style={{
        width: blockSize.toString() + 'px',
        maxWidth: blockSize.toString() + 'px',
      }}>
      <SigText {...{info}} />
      <div
        style={{
          width: blockSize.toString() + 'px',
          maxWidth: blockSize.toString() + 'px',
        }}>
        <a
          style={{
            textDecoration: 'unset',
            color: '#000',
            display: 'block',
            textAlign: 'center',
            marginBottom: '6px',
          }}
          href={`https://${fullUrl}`}>
          <Image info={info} sigImage={sigImage} imageWidth={info.imageWidth} />
        </a>
        {tagLine && <CET tagSize={info.tagSize} />}
      </div>
    </div>
  )
}

Stack.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
  blockSize: PropTypes.number,
}

export default Stack
