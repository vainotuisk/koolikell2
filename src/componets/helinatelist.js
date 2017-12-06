import React, { Component } from 'react'
import Helin from './Helin'
import { graphql, gql } from 'react-apollo'

class HelinateList extends Component {

    render() {

        if (this.props.allHelinsQuery && this.props.allHelinsQuery.loading) {
            return <div>Laeb</div>
        }
        if (this.props.allHelinsQuery && this.props.allHelinsQuery.error) {
            return <div>Error!</div>
        }
        const HelinadToRender = this.props.allHelinsQuery.allHelins

        return (
            <div>
                {HelinadToRender.map(helin => (
                    <Helin key={Helin.id} helin={helin}/>
                ))}
            </div>
        )
    }

}
const ALL_HELINS_QUERY = gql`
  # 2
  query AllHelinsQuery {allHelins{
  id,
  hour,
  minute,
  createdAt
}}
`

export default graphql(ALL_HELINS_QUERY, { name: 'allHelinsQuery' }) (HelinateList)