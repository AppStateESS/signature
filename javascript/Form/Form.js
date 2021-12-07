'use strict'
import React from 'react'
import PropTypes from 'prop-types'

const Form = ({info, update, buildings}) => {
  const buildingOptions = buildings.map((value, key) => {
    return (
      <option key={key} value={key}>
        {value.name}
      </option>
    )
  })
  return (
    <div className="row">
      <div className="col-sm-6">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => update('name', e.target.value)}
                  onBlur={() => {
                    if (info.email.length === 0) {
                      update(
                        'email',
                        info.name.replace(/.*\s(\w+)$/, '$1').toLowerCase()
                      )
                    }
                  }}
                  value={info.name}
                />
              </td>
            </tr>
            <tr>
              <td>Gender pronouns</td>
              <td>
                <input
                  className="form-control"
                  type="text"
                  placeholder="i.e. subject, object, possessive"
                  onChange={(e) => update('pronouns', e.target.value)}
                  value={info.pronouns}
                />
              </td>
            </tr>
            <tr>
              <td>Position</td>
              <td>
                <input
                  className="form-control"
                  type="text"
                  onChange={(e) => update('position', e.target.value)}
                  value={info.position}
                />
              </td>
            </tr>
            <tr>
              <td>Department</td>
              <td>
                <textarea
                  onFocus={(e) => e.target.select()}
                  className="form-control"
                  type="text"
                  onBlur={() => {
                    if (info.site.length === 0) {
                      update(
                        'site',
                        info.department.replace(/\s/g, '').toLowerCase()
                      )
                    }
                  }}
                  onChange={(e) => {
                    update('department', e.target.value)
                  }}
                  value={info.department}
                />
              </td>
            </tr>
            <tr>
              <td>Room/Suite</td>
              <td>
                <div className="row">
                  <div className="col-sm-5">
                    <select
                      onChange={(e) => update('roomType', e.target.value)}
                      className="form-control">
                      <option>Room</option>
                      <option>Suite</option>
                    </select>
                  </div>
                  <div className="col-sm-7">
                    <input
                      className="form-control"
                      type="text"
                      size="5"
                      onChange={(e) => update('room', e.target.value)}
                      value={info.room}
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => update('email', e.target.value)}
                    value={info.email}
                  />
                  <span className="input-group-text">@appstate.edu</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-sm-6">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Phone</td>
              <td>
                <div className="input-group mb-3">
                  <span className="input-group-text">828-262-</span>
                  <input
                    className="form-control"
                    type="text"
                    size="4"
                    maxLength="4"
                    onChange={(e) => update('phone', e.target.value)}
                    value={info.phone}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td>Building</td>
              <td>
                <select
                  className="form-control"
                  onChange={(e) => {
                    update('building', buildings[e.target.value].name)
                    update('address', buildings[e.target.value].address)
                  }}>
                  {buildingOptions}
                </select>
              </td>
            </tr>
            <tr>
              <td>AppState Box</td>
              <td>
                <input
                  className="form-control"
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
                  className="form-control"
                  type="text"
                  onChange={(e) => update('address', e.target.value)}
                  value={info.address}
                />
              </td>
            </tr>
            <tr>
              <td>Website URL</td>
              <td>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => update('site', e.target.value)}
                    value={info.site}
                  />
                  <span className="input-group-text">.appstate.edu</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Form.propTypes = {
  info: PropTypes.object,
  update: PropTypes.func,
  buildings: PropTypes.array,
}

export default Form
