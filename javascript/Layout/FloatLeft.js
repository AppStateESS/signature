'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from '../Image/Image'
import CET from '../CET'
import SigText from '../SigText'

const FloatLeft = ({info, sigImage}) => {
  const {site, tagLine, blockSize} = info
  const cellPadding = 8
  const tableWidth = blockSize + cellPadding * 2
  const leftBlock = Math.floor(blockSize * 0.3)
  const rightBlock = Math.floor(blockSize * 0.7)
  const fullUrl = site ? `${site}.appstate.edu` : 'appstate.edu'
  return (
    <table
      width={tableWidth.toString() + 'px'}
      style={{
        width: tableWidth.toString() + 'px',
        maxWidth: tableWidth.toString() + 'px',
      }}
      cellPadding={`${cellPadding.toString()}px`}>
      <tbody>
        <tr>
          <td
            style={{
              width: leftBlock.toString() + 'px',
              maxWidth: leftBlock.toString() + 'px',
              borderRight: '1px solid #aaa',
              textAlign: 'center',
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
                href={`https://${fullUrl}`}>
                <Image
                  info={info}
                  sigImage={sigImage}
                  imageWidth={info.imageWidth}
                />
              </a>
              {tagLine && <CET tagSize={info.tagSize} />}
            </div>
          </td>
          <td
            style={{
              width: rightBlock.toString() + 'px',
              maxWidth: rightBlock.toString() + 'px',
              verticalAlign: 'top',
            }}>
            <SigText {...{info}} />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

FloatLeft.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
  blockSize: PropTypes.number,
}

export default FloatLeft
