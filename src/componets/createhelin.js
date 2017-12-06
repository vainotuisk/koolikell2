import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class CreateHelin extends Component {

    state = {
        bell: 0,
        hour: 0,
        minute: 0
    }

    render() {
        return (
            <div>
                <div className='flex flex-column mt3'>
                    <input
                        className='mb2'
                        value={this.state.bell}
                        onChange={(e) => this.setState({ bell: e.target.value })}
                        type='number'
                        placeholder='Helina tüüp'
                    />
                    <input
                        className='mb2'
                        value={this.state.hour}
                        onChange={(e) => this.setState({ hour: e.target.value })}
                        type='number'
                        placeholder='tund'
                    />
                    <input
                        className='mb2'
                        value={this.state.minute}
                        onChange={(e) => this.setState({ minute: e.target.value })}
                        type='number'
                        placeholder='minut'
                    />
                </div>
                <button
                    onClick={() => this._createHelin()}
                >
                    Salvesta
                </button>
            </div>
        )
    }

    _createHelin = async () => {
        const { bell, hour, minute } = this.state
        await this.props.createHelinMutation({
            variables: {
                bell,
                hour,
                minute
            }
        })
    }

}

const CREATE_HELIN_MUTATION = gql`
  # 2
  mutation CreateHelinMutation($bell: Int!, $hour: Int!, $minute: Int!) {
    createHelin(
      bell: $bell,
      hour: $hour,
      minute: $minute,
    ) {
      id
      createdAt
      bell
      hour
      minute
    }
  }
`

// 3
export default graphql(CREATE_HELIN_MUTATION, { name: 'createHelinMutation' })(CreateHelin)
