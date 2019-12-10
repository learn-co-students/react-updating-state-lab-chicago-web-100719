// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    constructor() {
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

    handleResolutionClick = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    video: {
                        resolution: '720p'
                    }
                }
            }
        })
    }

    handleBitrateClick = () => {
        this.setState(previousState => {
            return {
                settings: {
                    ...this.state.settings,
                    bitrate: 12
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleBitrateClick} className='bitrate'>Bitrate</button>
                <button onClick={this.handleResolutionClick} className='resolution'>Resolution</button>
            </div>
        )
    }
}