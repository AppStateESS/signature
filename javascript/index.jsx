'use strict'
import React, {useState, useEffect, useRef} from 'react'
import Buildings from './Buildings'
import ReactDOM from 'react-dom'
import domtoimage from 'dom-to-image'
import Form from './Form'
import SignatureView from './SignatureView'

const Signature = () => {
  const defaultInfo = {
    department: 'Example department',
    name: '',
    position: '',
    email: '',
    phone: '',
    roomType: 'Room',
    room: '',
    box: 0,
    building: Buildings[0].name,
    address: Buildings[0].address,
    site: '',
    sigSource: '',
    fontSize: 30,
    fontTop: 0,
    imageDownload: null,
  }

  const [info, setInfo] = useState({...defaultInfo})
  const [sigSource, setSigSource] = useState('')
  const [fontSize, setFontSize] = useState(30)
  const [fontTop, setFontTop] = useState(0)
  const [imageDownload, setImageDownload] = useState()
  const [rendered, setRendered] = useState(false)

  const update = (varname, value) => {
    info[varname] = value
    setInfo({...info})
  }

  const sig = useRef()
  const sigImage = useRef()

  useEffect(() => {
    if (rendered) {
      let textLength = info.department.length

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
    } else {
      setRendered(true)
    }
  }, [info.department])

  const makeImage = () => {
    const node = sigImage.current
    domtoimage
      .toPng(node)
      .then(function (dataUrl) {
        setImageDownload(
          <div>
            <img src={dataUrl} />
          </div>
        )
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error)
      })
  }

  const copy = () => {
    navigator.clipboard.write(sig.current.innerHTML)
  }

  // useEffect(() => {
  //   navigator.clipboard.write(sig.current.innerHTML)
  // }, [sigSource])

  // const updateSource = () => {
  //   setSigSource(sig.current.innerHTML)
  // }

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
    sigImage.current.innerHTML = '[Paste image here]'
  }

  return (
    <div>
      <table className="table table">
        <tbody>
          <tr>
            <td>
              <img src="./img/settings.gif" className="img-fluid d-block" />
              <small className="alert alert-success p-2 d-block">
                Opening settings
              </small>

              <img src="./img/signaturesetting.jpg" className="img-fluid" />
              <small className="alert alert-success p-2 d-block">
                Signature setting area
              </small>
            </td>
            <td>
              <h2>Step 1</h2>
              <ol>
                <li>
                  <p>Open a separate tab or window on Gmail.</p>
                </li>
                <li>
                  <p>
                    Open the Gmail settings menu and click &quot;See all
                    settings.&quot;
                  </p>
                </li>
                <li>Scroll down to the signature setting area.</li>
                <li>Return to this page.</li>
              </ol>
            </td>
          </tr>
          <tr>
            <td>
              <Form {...{info, update}} />
            </td>
            <td>
              <h2>Step 2</h2>
              <p>Fill in your information to the left.</p>
            </td>
          </tr>
          <tr>
            <td>
              <SignatureView {...{sig, info, fontSize, fontTop, sigImage}} />
            </td>
            <td>
              <h2>Step 3</h2>
              <p>
                Review the look of your signature. Note that Google will alter
                this slightly as it removes some formatting.
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <h2>Step 4</h2>
              <p>Do the following:</p>
              <ol>
                <li>Click the Make image button</li>
                <li>Right click on the image.</li>
                <li>Left click on &quot;Save image as&quot;.</li>
                <li>
                  Save the image to your desktop or somewhere you can find it
                  later.
                </li>
              </ol>
            </td>
            <td>
              <button
                className="btn btn-primary float-left"
                onClick={makeImage}>
                Make image
              </button>
              <div className="m-5">{imageDownload}</div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h2>Step 5</h2>
              <p>
                Google will not let you paste in an image, so the follow the
                steps below as a workaround.
              </p>
              <ol>
                <li>
                  Substitute the image placement with a flag by clicking this
                  button:{' '}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={removeRender}>
                    Make [Paste image here] target
                  </button>
                </li>
                <li>
                  Click this button to highlight the signature:{' '}
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={selectAll}>
                    Select all
                  </button>
                </li>
                <li>Your signature above should now be highlighted.</li>
                <li>
                  Key <code>CTRL-C</code> to copy the signature information to
                  your clipboard.
                </li>
              </ol>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h2>Final Steps</h2>

              <p>
                You are almost done. You have the copy of the signature on your
                clipboard. Now you just need to paste it in.
              </p>
              <ol>
                <li>Go back to Google Settings page.</li>
                <li>Click the &quot;+ Create New&quot; button.</li>
                <li>Name it something snazzy.</li>
                <li>
                  The cursor will be in the editor box. Use <code>CTRL-P</code>{' '}
                  to paste in the signature.
                </li>
                <li>
                  Now you need to get the image in. Highlight the [Paste image
                  here] text with your mouse.
                </li>
                <li>
                  Click on the &quot;Insert image&quot; button on the signature
                  editor.
                </li>
                <li>Click on the &quot;Upload&quot; button.</li>
                <li>
                  Drag the signature image you saved in Step 4 into the space or
                  click on the &quot;Select a file from your device&quot; button
                  and find the saved file.
                </li>
                <li>
                  If you want this signature to be your default, choose it from
                  the dropdown menu underneath.
                </li>
                <li>
                  Last step, scroll to the bottom of the page and click the
                  &quot;Save Changes&quot; button.
                </li>
              </ol>
              <p>
                Congratulations! You now have a rockin' signature. If you are
                comfortable with the editing, you are free to go back to
                Settings and make changes.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<Signature />, document.getElementById('Signature'))
