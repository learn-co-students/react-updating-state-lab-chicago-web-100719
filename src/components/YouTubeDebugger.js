// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YoutubeDebugger extends Component {
  constructor(){
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  updateBitrate = () => {

    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12 
      }
    })
  }

  updateResolution = () => {

    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    },() => console.log(this.state.settings.video.resolution))
  }


  render(){
    return (<div>
              <button className="bitrate" onClick={this.updateBitrate}>Change BitRate</button>
              <button className="resolution" onClick={this.updateResolution}>Change Resolution</button>
            </div>
   ) 
  }
}