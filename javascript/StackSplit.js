'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const StackSplit = ({info, sig, sigImage}) => {
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
        <table style={{width: '100%'}} cellPadding="4">
          <tbody>
            <tr>
              <td style={{width: '50%', textAlign: 'center'}}>
                <div style={{position: 'relative'}}>
                  <a
                    style={{
                      textDecoration: 'unset',
                      color: '#000',
                      display: 'block',
                      marginBottom: '6px',
                    }}
                    href={`https://${site}`}>
                    <Image
                      info={info}
                      sigImage={sigImage}
                      imageWidth={info.imageWidth}
                    />
                  </a>
                </div>
              </td>
              <td style={{borderLeft: '1px #aaa solid'}}>
                <div>{tagLine && <CET />}</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

StackSplit.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default StackSplit
