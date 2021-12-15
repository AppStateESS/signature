'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-input-slider'

const SigControls = ({update, info}) => {
  const setPosition = (position) => {
    const positionInt = parseInt(position.target.value)
    update('imagePosition', positionInt)
    switch (positionInt) {
      // bottom
      case 0:
        update('fontSize', 30)
        break
      // float right
      case 1:
        update('fontSize', 20)
        break
      // split bottom
      case 2:
        update('fontSize', 18)
        break
      // float left
      case 3:
        update('fontSize', 20)
        break
    }
  }

  const setImageType = (imageType) => {
    const imageTypeInt = parseInt(imageType.target.value)
    update('imageType', imageTypeInt)
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
            Float image right
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="imagePosition"
              value="3"
              onClick={setPosition}
              defaultChecked={info.imagePosition === 1}
            />{' '}
            Float image left
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
                  Image size: {info.imageWidth}%
                  <br />
                  <Slider
                    axis="x"
                    x={info.imageWidth}
                    xmax={100}
                    xmin={20}
                    onChange={(e) => {
                      update('imageWidth', e.x)
                    }}
                  />
                </td>
                <td>
                  Department font size: {info.fontSize}
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
                <td>
                  Line height: {info.lineHeight}
                  <br />
                  <Slider
                    axis="x"
                    xmin={info.fontSize}
                    x={info.lineHeight}
                    onChange={(e) => {
                      update('lineHeight', e.x)
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  Tag font size: {info.tagSize}
                  <br />
                  <Slider
                    axis="x"
                    xmin={8}
                    xmax="40"
                    x={info.tagSize}
                    onChange={(e) => {
                      update('tagSize', e.x)
                    }}
                  />
                </td>
                <td>
                  Block size: {info.blockSize}
                  <br />
                  <Slider
                    axis="x"
                    xmin={200}
                    xmax={500}
                    x={info.blockSize}
                    onChange={(e) => {
                      update('blockSize', e.x)
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

SigControls.propTypes = {
  info: PropTypes.object,
  update: PropTypes.func,
  floatWidth: PropTypes.number,
  blockWidth: PropTypes.number,
}

export default SigControls
