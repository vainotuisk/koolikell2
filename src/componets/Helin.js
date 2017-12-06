import React, { Component } from 'react'

class Helin extends Component {

    render() {
        return (
            <div>
                <div>{this.props.helin.hour}:{this.props.helin.minute}</div>
            </div>
        )
    }
}

export default Helin