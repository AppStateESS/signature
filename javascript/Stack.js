'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const Stack = ({info, sigImage}) => {
  const {site, tagLine} = info

  return (
    <div style={{width: '316px', maxWidth: '316px'}}>
      <SigText {...{info}} />
      <div>
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
}

export default Stack
