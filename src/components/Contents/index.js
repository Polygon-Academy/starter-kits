import React, {Component} from 'react'
import {
  Grid,
  Rail,
} from 'semantic-ui-react'

import WalletInfo from "../Wallet/WalletInfo"

const contentStyle = {
  marginTop: "5em",
  width: "100%",
};


export default class StickyLayout extends Component {
  render() {
    return (

    <Grid centered columns={2} style={contentStyle}>
      <Grid.Column>

        {
          React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {})
          })
        }


        <Rail dividing position='right' style={{width: "420px"}}>
          <WalletInfo/>
        </Rail>
      </Grid.Column>
    </Grid>


    )
  }
}
