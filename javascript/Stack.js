'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const Stack = ({info, sig}) => {
  const {site, tagLine} = info

  return (
    <div
      style={{
        border: '1px solid #333',
        padding: '6px',
        width: '312px',
      }}
      ref={sig}>
      <div style={{width: '300px'}}>
        <SigText {...{info}} />
        <div>
          <a
            style={{
              textDecoration: 'unset',
              color: '#000',
              display: 'block',
              marginBottom: '6px',
            }}
            href={`https://${site}`}>
            <Image info={info} />
          </a>
          {tagLine && <CET />}
        </div>
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
