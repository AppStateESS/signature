'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const Float = ({info, sig, sigImage}) => {
  const {site, tagLine} = info
  return (
    <div
      style={{
        border: '1px solid #333',
        padding: '6px',
        width: '612px',
      }}
      ref={sig}>
      <table width="600px" style={{width: '600px'}} cellPadding="5px">
        <tbody>
          <tr>
            <td style={{width: '50%', verticalAlign: 'top'}}>
              <SigText {...{info}} />
            </td>
            <td
              style={{
                width: '50%',
                borderLeft: '1px solid black',
                verticalAlign: 'center',
              }}>
              <div>
                <a
                  style={{
                    textDecoration: 'unset',
                    color: '#000',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                  href={`https://${site}`}>
                  <Image info={info} sigImage={sigImage} />
                </a>
                {tagLine && <CET />}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

Float.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default Float
