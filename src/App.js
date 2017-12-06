import React, { Component } from 'react'
import HelinateList from './componets/helinatelist'
import OnOff from './componets/onoff'
import CreateHelin from './componets/createhelin'
class App extends Component {
    render() {
        return (
            <div>
            <HelinateList />
            <OnOff />
                <CreateHelin />
            </div>
                )
    }
}

export default App
