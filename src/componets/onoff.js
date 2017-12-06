import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'
class OnOff extends Component {

    render() {

        if (this.props.onoffQuery && this.props.onoffQuery.loading) {
            return <div>Laeb</div>
        }
        if (this.props.onoffQuery && this.props.onoffQuery.error) {
            return <div>Error!</div>
        }
 //       const OnoffToRender = this.props.onoffQuery.allOnoffs
        if (this.props.onoffQuery.allOnoffs[0].isSees)
        return (
            <div>
                Sees
            </div>
        )
        else
            return(
                <div>
                    Väljas
                </div>
            )
    }

}
const ONOFF_QUERY = gql`
 
  query OnOffQuery {allOnoffs
  
  {id,
  isSees}
  }
`

export default graphql(ONOFF_QUERY, { name: 'onoffQuery' }) (OnOff)