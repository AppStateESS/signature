'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Image from './Image'
import CET from './CET'
import SigText from './SigText'

const Float = ({info, sigImage, floatWidth}) => {
  const cellPadding = 4
  const tableWidth = floatWidth + cellPadding * 2
  const cellWidth = Math.floor(floatWidth / 2)
  const {site, tagLine} = info
  return (
    <table
      width={tableWidth.toString() + 'px'}
      style={{
        width: tableWidth.toString + 'px',
        maxWidth: tableWidth.toString + 'px',
      }}
      cellPadding={`${cellPadding.toString()}px`}>
      <tbody>
        <tr>
          <td
            style={{
              width: cellWidth.toString + 'px',
              maxWidth: cellWidth.toString + 'px',
              verticalAlign: 'top',
            }}>
            <SigText {...{info}} />
          </td>
          <td
            style={{
              width: cellWidth.toString + 'px',
              maxWidth: cellWidth.toString + 'px',
              borderLeft: '1px solid #aaa',
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
                href={`https://${site}`}>
                <Image
                  info={info}
                  sigImage={sigImage}
                  imageWidth={info.imageWidth}
                />
              </a>
              {tagLine && <CET />}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

Float.propTypes = {
  sig: PropTypes.object,
  info: PropTypes.object,
  sigImage: PropTypes.object,
  floatWidth: PropTypes.number,
}

export default Float
