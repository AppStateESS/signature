'use strict'
import React, {useState, useEffect, useRef} from 'react'
import Buildings from './Buildings'
import ReactDOM from 'react-dom'
import domtoimage from 'dom-to-image'

const Signature = () => {
  const [department, setDepartment] = useState('Example department')
  const [name, setName] = useState('')
  const [position, setPosition] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [roomType, setRoomType] = useState('Room')
  const [room, setRoom] = useState('')
  const [box, setBox] = useState(0)
  const [building, setBuilding] = useState(Buildings[0].name)
  const [address, setAddress] = useState(Buildings[0].address)
  const [site, setSite] = useState('')
  const [sigSource, setSigSource] = useState('')
  const [fontSize, setFontSize] = useState(30)
  const [fontTop, setFontTop] = useState(0)
  const [imageDownload, setImageDownload] = useState()

  const sig = useRef()
  const sigImage = useRef()

  useEffect(() => {
    let textLength = department.length

    let baseSize = 48
    if (textLength >= baseSize) {
      textLength = baseSize - 2
    }
    setFontSize(baseSize - textLength)
    if (textLength < 10) {
      setFontTop(0)
    } else if (textLength > 10 && textLength < 20) {
      setFontTop(10)
    } else if (textLength > 20 && textLength < 28) {
      setFontTop(15)
    } else if (textLength > 28) {
      setFontTop(22)
    }
  }, [department])

  const makeImage = () => {
    const node = sigImage.current
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        setImageDownload(
          <div style={{margin: '10px'}}>
            <p>
              <img src={dataUrl} />
            </p>
            <hr />
            <p>Right click and save image then upload to Google.</p>
          </div>
        )
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

  const buildingOptions = Buildings.map((value, key) => {
    return (
      <option key={key} value={key}>
        {value.name}
      </option>
    )
  })

  const copy = () => {
    navigator.clipboard.write(sig.current.innerHTML)
  }

  const updateSource = () => {
    setSigSource(sig.current.innerHTML)
  }

  const selectAll = () => {
    if (document.body.createTextRange) {
      const range = document.body.createTextRange()
      range.moveToElementText(sig.current)
      range.select()
    } else if (window.getSelection) {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(sig.current)
      selection.removeAllRanges()
      selection.addRange(range)
    }
  }

  const removeRender = () => {
    sigImage.current.innerHTML = '[paste image here]'
  }

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </td>
          </tr>
          <tr>
            <td>Position</td>
            <td>
              <input
                type="text"
                onChange={(e) => setPosition(e.target.value)}
                value={position}
              />
            </td>
          </tr>
          <tr>
            <td>Department</td>
            <td>
              <input
                type="text"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
              />
            </td>
          </tr>
          <tr>
            <td>Room/Suite</td>
            <td>
              <select onChange={(e) => setRoomType(e.target.value)}>
                <option>Room</option>
                <option>Suite</option>
              </select>
              <input
                type="text"
                onChange={(e) => setRoom(e.target.value)}
                value={room}
              />
            </td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
            </td>
          </tr>
          <tr>
            <td>Building</td>
            <td>
              <select
                onChange={(e) => {
                  setBuilding(Buildings[e.target.value].name)
                  setAddress(Buildings[e.target.value].address)
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
                value={box}
                onChange={(e) => setBox(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Address</td>
            <td>
              <input
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </td>
          </tr>
          <tr>
            <td>Website URL</td>
            <td>
              <input
                type="text"
                onChange={(e) => setSite(e.target.value)}
                value={site}
                placeholder="example.appstate.edu"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div
        style={{border: '1px solid #333', padding: '6px', width: '600px'}}
        ref={sig}>
        <div style={{width: '600px'}}>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td style={{width: '50%'}}>
                  <a
                    style={{textDecoration: 'none', color: '#000'}}
                    href={`https://${site}`}>
                    <div style={{position: 'relative'}} ref={sigImage}>
                      <div
                        style={{
                          width: '300px',
                          height: '63px',
                          position: 'absolute',
                          textAlign: 'center',
                          fontFamily: 'Times New Roman, Times, Serif',
                          top: `${fontTop}px`,
                          fontSize,
                        }}>
                        {department}
                      </div>
                      <img src="./swoop.png" />
                    </div>
                  </a>
                </td>
                <td style={{width: '50%'}}>
                  <div style={{fontFamily: 'Times New Roman, Times, Serif'}}>
                    <strong>{name ? name : 'Example Name'}</strong>
                  </div>
                  <div
                    style={{
                      fontFamily: 'Helvetica, Arial, Sans-Serif',
                      fontSize: '12px',
                      color: '#444',
                    }}>
                    <em>{position ? position : 'Position title'}</em>
                    <br />
                    <span style={{color: '#FFCC00'}}>
                      Appalachian State University
                    </span>
                    <br />
                    Email:&nbsp;
                    <a
                      style={{textDecoration: 'none', color: '#444'}}
                      href={`mailto:${email}@appstate.edu`}>
                      {email
                        ? email + '@appstate.edu'
                        : 'your-username@appstate.edu'}
                    </a>
                    <br />
                    Phone:&nbsp;
                    <a
                      style={{textDecoration: 'none', color: '#444'}}
                      href={`tel:+1828262${phone}`}>
                      (828) 262-{phone ? phone : '####'}
                    </a>
                    <br />
                    Office: {roomType} {room ? room : '###'}, {building}
                    <br />
                    Address: {box > 0 ? `PO Box ${box},` : null} {address}
                    <br />
                    <a
                      style={{textDecoration: 'none'}}
                      href={`https://${site}`}>
                      {site ? site : 'department.appstate.edu'}
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            style={{fontSize: '24px', marginTop: '4px', textAlign: 'center'}}>
            <a
              style={{textDecoration: 'none', color: 'black'}}
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
      <div>
        <button onClick={selectAll}>Select all</button> After the text is
        highlighted, CTRL-C to copy.
      </div>
      <div>
        <button onClick={removeRender}>Remove the rendered image</button>
      </div>
      <hr />
      <button onClick={makeImage}>Make image</button>
      {imageDownload}
      <h3>Source</h3>
      <button onClick={updateSource}>Update source below</button>
      <div
        style={{border: '1px solid #333', padding: '6px', minHeight: '100px'}}>
        {sigSource}
      </div>
      <p>
        Pasting this code will not work in an editor unless it has a source
        mode.
      </p>
      <button onClick={copy}>Copy HTML</button>
    </div>
  )
}

ReactDOM.render(<Signature />, document.getElementById('Signature'))
