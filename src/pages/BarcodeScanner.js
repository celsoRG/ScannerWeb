import React, { Component } from 'react'
import Scanner from './Scanner'
import { TextareaAutosize, Paper} from '@material-ui/core'


class BarcodeScanner extends Component {
  state = {
    results: [],
  }

  Scan = () => {
    this.setState({ scanning: !this.state.scanning })
  }

  onDetected = result => {
    this.setState({ results: [] })
    this.setState({ results: this.state.results.concat([result]) })
  }

  render() {
    return (
      <div>
        
        <span>Barcode Scanner</span>
        
        <Paper variant="outlined" style={{marginTop:30, width:640, height:320}}>
          <Scanner onDetected={this.onDetected} />
        </Paper>

        <TextareaAutosize
            style={{fontSize:18, width:320, height:100, marginTop:30}}
            rowsMax={4}
            defaultValue={'Ningún dato escaneado'}
            value={this.state.results[0] ? this.state.results[0].codeResult.code : 'Ningún dato escaneado'}
        />

      </div>
    )
  }
}

export default BarcodeScanner
