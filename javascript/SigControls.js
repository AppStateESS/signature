'use strict'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-input-slider'

const SigControls = ({update, info}) => {
  const setPosition = (position) => {
    const positionInt = parseInt(position.target.value)
    update('imagePosition', positionInt)
    switch (positionInt) {
      // bottom
      case 0:
        update('imageWidth', info.imageType === 2 ? 150 : 300)
        update('fontSize', 30)
        break
      // right
      case 1:
        update('imageWidth', info.imageType === 2 ? 150 : 300)
        update('fontSize', 30)
        break
      // split bottom
      case 2:
        update('imageWidth', info.imageType === 2 ? 75 : 150)
        update('fontSize', 18)
        break
    }
  }

  const setImageType = (imageType) => {
    const imageTypeInt = parseInt(imageType.target.value)
    update('imageType', imageTypeInt)
    switch (imageTypeInt) {
      // bird
      case 1:
        update('imageWidth', info.imagePosition === 2 ? 150 : 300)
        break
      // Big A
      case 2:
        update('imageWidth', info.imagePosition === 2 ? 75 : 150)
        break
      // Vaccinate
      case 3:
        update('imageWidth', info.imagePosition === 2 ? 200 : 300)
        break
    }
  }

  return (
    <div className="row">
      <div className="col-sm-3">
        <div className="mb-3">
          <strong>Position</strong>
          <br />
          <label>
            <input
              type="radio"
              name="imagePosition"
              value="0"
              onClick={setPosition}
              defaultChecked={info.imagePosition === 0}
            />{' '}
            Bottom
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imagePosition"
              value="2"
              onClick={setPosition}
              defaultChecked={info.imagePosition === 2}
            />{' '}
            Bottom - Split
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imagePosition"
              value="1"
              onClick={setPosition}
              defaultChecked={info.imagePosition === 1}
            />{' '}
            Right
          </label>
        </div>
        <div className="mb-3">
          <strong>Image type</strong>
          <br />
          <label>
            <input
              type="radio"
              name="imageType"
              value="0"
              onClick={setImageType}
              defaultChecked={info.imageType === 0}
            />{' '}
            None
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imageType"
              value="1"
              onClick={setImageType}
              defaultChecked={info.imageType === 1}
            />{' '}
            Mountain bird
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imageType"
              value="2"
              onClick={setImageType}
              defaultChecked={info.imageType === 2}
            />{' '}
            Big A
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imageType"
              value="3"
              onClick={(e) => {
                update('imageType', parseInt(e.target.value))
              }}
              defaultChecked={info.imageType === 3}
            />{' '}
            Vaccinated
          </label>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="mb-3">
          <strong>Department</strong>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={() => {
                update('showDepartment', !info.showDepartment)
              }}
              value="1"
              checked={info.showDepartment}
            />{' '}
            Show under position
          </label>
        </div>
        <div>
          <strong>Tagline</strong>
          <br />
          <label>
            <input
              type="checkbox"
              onChange={() => {
                update('tagLine', !info.tagLine)
              }}
              value="1"
              checked={info.tagLine}
            />{' '}
            Include tag line
          </label>
        </div>
      </div>
      <div className="col-sm-6">
        <strong>Sizing</strong>
        <p>
          You can shift and resize your department name in the graphic by using
          the sliders below.
        </p>
        <div>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td>
                  Image size: {info.imageWidth}
                  <br />
                  <Slider
                    axis="x"
                    x={info.imageWidth}
                    xmax={300}
                    xmin={50}
                    onChange={(e) => {
                      update('imageWidth', e.x)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Font size: {info.fontSize}
                  <br />
                  <Slider
                    axis="x"
                    x={info.fontSize}
                    xmax={50}
                    xmin={8}
                    onChange={(e) => {
                      update('fontSize', e.x)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Top space: {info.fontTop}
                  <br />
                  <Slider
                    axis="x"
                    x={info.fontTop}
                    onChange={(e) => {
                      update('fontTop', e.x)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Line height: {info.lineHeight}
                  <br />
                  <Slider
                    axis="x"
                    x={info.lineHeight}
                    onChange={(e) => {
                      update('lineHeight', e.x)
                    }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

SigControls.propTypes = {info: PropTypes.object, update: PropTypes.func}

export default SigControls
