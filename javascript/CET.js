'use strict'
import React from 'react'

const CET = ({breakCet, tagSize}) => {
  return (
    <div
      style={{
        fontSize: tagSize,
        marginTop: '4px',
        textAlign: 'center',
        lineHeight: '24px',
      }}>
      <a
        style={{textDecoration: 'unset', color: 'black'}}
        href="https://studentaffairs.appstate.edu/pagesmith/49">
        <strong>
          <span style={{color: '#888'}}>Care.</span>
          {breakCet ? <br /> : ' '}
          <span style={{color: '#FFCC00'}}>Engage.</span>
          {breakCet ? <br /> : ' '}
          <span>Transform.</span>
        </strong>
      </a>
    </div>
  )
}

CET.propTypes = {}

export default CET
