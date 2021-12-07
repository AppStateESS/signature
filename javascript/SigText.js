'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const SigText = ({info}) => {
  const {
    position,
    pronouns,
    email,
    phone,
    roomType,
    room,
    building,
    box,
    site,
    address,
    name,
    showDepartment,
    department,
  } = info
  return (
    <div>
      <div
        style={{
          fontFamily: 'Times New Roman, Times, Serif',
          fontSize: '17px',
        }}>
        <strong>{name ? name : 'Example Name'}</strong>
        {pronouns && <span style={{fontSize: '14px'}}> ({pronouns})</span>}
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
        {showDepartment && <div>{department}</div>}
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
        URL:{' '}
        <a
          style={{textDecoration: 'unset'}}
          href={`https://${site}.appstate.edu`}>
          {site
            ? site + '.appstate.edu'
            : department.replace(/\s/g, '').toLowerCase() + '.appstate.edu'}
        </a>
      </div>
    </div>
  )
}

SigText.propTypes = {
  info: PropTypes.object,
}

export default SigText
