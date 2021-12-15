'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import CET from '../CET'
import SigText from '../SigText'

const StackSplit = ({info, sigImage}) => {
  const {site, tagLine, blockSize} = info
  const fullUrl = site ? `${site}.appstate.edu` : 'appstate.edu'
  return (
    <div style={{width: blockSize.toString() + 'px'}}>
      <SigText {...{info}} />
      <table style={{width: blockSize.toString() + 'px'}} cellPadding="4">
        <tbody>
          <tr>
            <td style={{textAlign: 'center'}} width="50%">
              <div style={{position: 'relative'}}>
                <a
                  style={{
                    textDecoration: 'unset',
                    color: '#000',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                  href={`https://${fullUrl}`}>
                  <Image
                    info={info}
                    sigImage={sigImage}
                    imageWidth={info.imageWidth}
                  />
                </a>
              </div>
            </td>
            <td style={{textAlign: 'center', borderLeft: '1px #aaa solid'}}>
              <div>
                {tagLine && <CET breakCet={true} tagSize={info.tagSize} />}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

StackSplit.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default StackSplit
