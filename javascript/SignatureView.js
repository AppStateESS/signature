'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import SigImage from './SigImage'

const SignatureView = ({sig, info, fontSize, fontTop, sigImage}) => {
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
  } = info
  return (
    <div
      style={{border: '1px solid #333', padding: '6px', width: '312px'}}
      ref={sig}>
      <div style={{width: '300px'}}>
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
          }}>
          <em>{position ? position : 'Position title'}</em>
          <br />
          <a href="https://appstate.edu" style={{textDecoration: 'unset'}}>
            <span style={{color: '#FFCC00'}}>Appalachian State University</span>
          </a>
          <br />
          Email:{' '}
          <a
            style={{textDecoration: 'unset', color: '#444'}}
            href={`mailto:${email}@appstate.edu`}>
            {email ? email + '@appstate.edu' : 'your-username@appstate.edu'}
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

        <a
          style={{textDecoration: 'unset', color: '#000'}}
          href={`https://${site}`}>
          <SigImage {...{sigImage, fontSize, department, fontTop}} />
        </a>

        <div
          style={{
            fontSize: '24px',
            marginTop: '4px',
          }}>
          <a
            style={{textDecoration: 'unset', color: 'black'}}
            href="https://studentaffairs.appstate.edu/pagesmith/49">
            <strong>
              <span style={{color: '#888'}}>Care.</span>{' '}
              <span style={{color: '#FFCC00'}}>Engage.</span>{' '}
              <span>Transform.</span>
            </strong>
          </a>
        </div>
      </div>
    </div>
  )
}

SignatureView.propTypes = {
  sig: PropTypes.object,
  fontSize: PropTypes.number,
  fontTop: PropTypes.number,
  info: PropTypes.object,
  sigImage: PropTypes.object,
}

export default SignatureView
