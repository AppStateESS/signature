'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import SigImage from './SigImage'
import BlockA from './BlockA'
import CET from './CET'

const Float = ({info, sig, sigImage}) => {
  const {
    position,
    email,
    phone,
    roomType,
    room,
    building,
    box,
    site,
    address,
    department,
    name,
    lineHeight,
    fontSize,
    fontTop,
    imagePosition,
    imageType,
    tagLine,
  } = info
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
            <td style={{width: '50%'}}>
              <div
                style={{
                  fontFamily: 'Times New Roman, Times, Serif',
                  fontSize: '17px',
                }}>
                <strong>{name ? name : 'Example Name'}</strong>
              </div>
              <div
                style={{
                  fontFamily: 'Helvetica, Arial, Sans-Serif',
                  fontSize: '13px',
                  color: '#444',
                  marginBottom: '10px',
                }}>
                <em>{position ? position : 'Position title'}</em>
                <br />
                <a
                  href="https://appstate.edu"
                  style={{textDecoration: 'unset'}}>
                  <span style={{color: '#FFCC00'}}>
                    Appalachian State University
                  </span>
                </a>
                <br />
                Email:{' '}
                <a
                  style={{textDecoration: 'unset', color: '#444'}}
                  href={`mailto:${email}@appstate.edu`}>
                  {email
                    ? email + '@appstate.edu'
                    : 'your-username@appstate.edu'}
                </a>
                <br />
                Phone:{' '}
                <a
                  style={{textDecoration: 'unset', color: '#444'}}
                  href={`tel:+1828262${phone}`}>
                  (828) 262-{phone ? phone : '####'}
                </a>
                <br />
                Office: {roomType} {room ? room : '###'}, {building}
                <br />
                Address: {box > 0 ? `PO Box ${box},` : null} {address}
                <br />
                <a style={{textDecoration: 'unset'}} href={`https://${site}`}>
                  {site ? site : 'department.appstate.edu'}
                </a>
              </div>
            </td>
            <td style={{width: '50%', borderLeft: '1px solid black'}}>
              <div>
                <a
                  style={{
                    textDecoration: 'unset',
                    color: '#000',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                  href={`https://${site}`}>
                  {imageType === 0 ? (
                    <SigImage
                      {...{
                        sigImage,
                        fontSize,
                        department,
                        fontTop,
                        lineHeight,
                        imagePosition,
                        imageType,
                      }}
                    />
                  ) : (
                    <BlockA
                      {...{
                        sigImage,
                        fontSize,
                        department,
                        fontTop,
                        lineHeight,
                        imagePosition,
                        imageType,
                      }}
                    />
                  )}
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
