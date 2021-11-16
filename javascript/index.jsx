'use strict'
import React, {useState, useRef, useEffect} from 'react'
import Buildings from './Buildings'
import ReactDOM from 'react-dom'
import domtoimage from 'dom-to-image'
import Form from './Form'
import SignatureView from './SignatureView'
import SigControls from './SigControls'

const Signature = () => {
  const defaultInfo = {
    department: 'Example department',
    showDepartment: false,
    name: '',
    pronouns: '',
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
    lineHeight: 30,
    imageDownload: null,
    imagePosition: 0,
    imageType: 1,
    imageWidth: 250,
    tagLine: true,
  }

  const [info, setInfo] = useState({...defaultInfo})
  const [imageDownload, setImageDownload] = useState()

  const update = (varname, value) => {
    if (varname === 'email' && value.match(/@/)) {
      return
    }
    info[varname] = value
    setInfo({...info})
  }

  useEffect(() => {
    update('lineHeight', info.fontSize)
  }, [info.fontSize])

  /**
   * Controls the large width of the float box
   */
  const floatWidth = 540
  const blockWidth = 300

  const sig = useRef()
  const sigImage = useRef()

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
      <div className="row">
        <div className="col-sm-6">
          <h2>Step 1</h2>
          <ol>
            <li>Open a separate tab or window on Gmail.</li>
            <li>
              Open the Gmail settings menu and click &quot;See all
              settings.&quot;
            </li>
            <li>Scroll down to the signature setting area.</li>
            <li>Return to this page.</li>
          </ol>
        </div>
        <div className="col-sm-6">
          <img src="./img/settings.gif" className="img-fluid d-block" />
        </div>
      </div>
      <div>
        <h2>Step 2</h2>
        <p>
          Fill in your information below. You can see the changes reflected in
          Step 3.
        </p>
      </div>
      <Form {...{info, update}} />
      <div>
        {' '}
        <h2>Step 3</h2>
        <p>Review the look of your signature.</p>
        <SigControls {...{update, info, floatWidth, blockWidth}} />
        <SignatureView {...{sig, info, sigImage, floatWidth, blockWidth}} />
      </div>
      <hr />
      <table className="table table">
        <tbody>
          <tr>
            <td style={{width: '50%'}}>
              <h2>Step 4</h2>
              <p>Do the following:</p>
              <ol>
                <li>
                  Click this button:{' '}
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={makeImage}>
                    Make image
                  </button>
                </li>
                <li>
                  A copy of the Mountain Bird or Block A graphic will appear.
                  Right click on the image.
                </li>
                <li>Left click on &quot;Save image as&quot;.</li>
                <li>
                  Save the image to your desktop or somewhere you can find it
                  later.
                </li>
              </ol>
            </td>
            <td>
              <div className="d-flex justify-content-center align-items-center">
                {imageDownload}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <div className="row">
                <div className="col-sm-8">
                  <h2>Step 5</h2>
                  <p>
                    Google will not let you paste the signature with the
                    graphic, so follow the steps below as a workaround.
                  </p>
                  <ol>
                    <li>
                      Substitute the image placement with a flag by clicking
                      this button:{' '}
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
                      Key <code>CTRL-C</code> to copy the signature information
                      to your clipboard.
                    </li>
                  </ol>
                </div>
                <div className="col-sm-4">
                  <img src="./img/paste-image.jpg" className="img-fluid" />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <h2>Final Steps</h2>
              <div className="row">
                <div className="col-sm-6">
                  <p>
                    You are almost done. You have the copy of the signature on
                    your clipboard. Now you just need to paste it in.
                  </p>
                  <ol>
                    <li>Go back to Google Settings page.</li>
                    <li>Click the &quot;+ Create New&quot; button.</li>
                    <li>Name it something snazzy.</li>
                    <li>
                      The cursor will be in the editor box. Use{' '}
                      <code>CTRL-P</code> to paste in the signature.
                    </li>
                    <li>
                      Now you need to get the image in. Highlight the [Paste
                      image here] text with your mouse.
                    </li>
                    <li>
                      Click on the &quot;Insert image&quot; button on the
                      signature editor.
                    </li>
                    <li>Click on the &quot;Upload&quot; button.</li>
                    <li>
                      Drag the signature image you saved in Step 4 into the
                      space or click on the &quot;Select a file from your
                      device&quot; button and find the saved file.
                    </li>
                    <li>
                      If you want this signature to be your default, choose it
                      from the dropdown menu underneath.
                    </li>
                    <li>
                      Last step,{' '}
                      <strong>
                        scroll to the bottom of the page and click the
                        &quot;Save Changes&quot; button
                      </strong>
                      .
                    </li>
                  </ol>
                  <p>
                    Congratulations! You now have a rockin&apos; signature. If
                    you are comfortable with the editing, you are free to go
                    back to Settings and make changes.
                  </p>
                </div>
                <div className="col-sm-6">
                  <img src="./img/signature-edit.gif" className="img-fluid" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(<Signature />, document.getElementById('Signature'))
