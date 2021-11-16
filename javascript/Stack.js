'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const Stack = ({info, sigImage, blockWidth}) => {
  const {site, tagLine} = info

  return (
    <div
      style={{
        width: blockWidth.toString() + 'px',
        maxWidth: blockWidth.toString() + 'px',
      }}>
      <SigText {...{info}} />
      <div
        style={{
          width: blockWidth.toString() + 'px',
          maxWidth: blockWidth.toString() + 'px',
        }}>
        <a
          style={{
            textDecoration: 'unset',
            color: '#000',
            display: 'block',
            textAlign: 'center',
            marginBottom: '6px',
          }}
          href={`https://${site}`}>
          <Image info={info} sigImage={sigImage} imageWidth={info.imageWidth} />
        </a>
        {tagLine && <CET />}
      </div>
    </div>
  )
}

Stack.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
  blockWidth: PropTypes.number,
}

export default Stack
