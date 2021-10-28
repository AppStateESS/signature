'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Buildings from './Buildings'

const buildingOptions = Buildings.map((value, key) => {
  return (
    <option key={key} value={key}>
      {value.name}
    </option>
  )
})
const Form = ({info, update}) => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Name</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('name', e.target.value)}
              value={info.name}
            />
          </td>
        </tr>
        <tr>
          <td>Position</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('position', e.target.value)}
              value={info.position}
            />
          </td>
        </tr>
        <tr>
          <td>Department</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('department', e.target.value)}
              value={info.department}
            />
          </td>
        </tr>
        <tr>
          <td>Room/Suite</td>
          <td>
            <select onChange={(e) => update('roomType', e.target.value)}>
              <option>Room</option>
              <option>Suite</option>
            </select>
            <input
              type="text"
              onChange={(e) => update('room', e.target.value)}
              value={info.room}
            />
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('email', e.target.value)}
              value={info.email}
            />
            @appstate.edu
          </td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>
            828-262-
            <input
              type="text"
              size="4"
              maxLength="4"
              onChange={(e) => update('phone', e.target.value)}
              value={info.phone}
            />
          </td>
        </tr>
        <tr>
          <td>Building</td>
          <td>
            <select
              onChange={(e) => {
                update('building', Buildings[e.target.value].name)
                update('address', Buildings[e.target.value].address)
              }}>
              {buildingOptions}
            </select>
          </td>
        </tr>
        <tr>
          <td>AppState Box</td>
          <td>
            <input
              size="6"
              type="text"
              value={info.box}
              onChange={(e) => update('box', e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>Address</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('address', e.target.value)}
              value={info.address}
            />
          </td>
        </tr>
        <tr>
          <td>Website URL</td>
          <td>
            <input
              type="text"
              onChange={(e) => update('site', e.target.value)}
              value={info.site}
              placeholder="example.appstate.edu"
            />
          </td>
        </tr>
      </tbody>
    </table>
  )
}

Form.propTypes = {info: PropTypes.object, update: PropTypes.func}

export default Form
