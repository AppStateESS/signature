'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import CET from '../CET'
import SigText from '../SigText'

const StackSplit = ({info, sigImage}) => {
  const {site, tagLine} = info
  const fullUrl = site ? `${site}.appstate.edu` : 'appstate.edu'
  return (
    <div style={{width: '316px', maxWidth: '316px'}}>
      <SigText {...{info}} />
      <table style={{width: '316px', maxWidth: '300px'}} cellPadding="4">
        <tbody>
          <tr>
            <td style={{maxWidth: '150px', textAlign: 'center'}} width="150px">
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
            <td
              style={{maxWidth: '150px', borderLeft: '1px #aaa solid'}}
              width="150px">
              <div style={{maxWidth: '150px'}}>
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
