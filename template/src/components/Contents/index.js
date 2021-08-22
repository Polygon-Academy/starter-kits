import React, {Component} from 'react'
import {
  Grid,
  Container
} from 'semantic-ui-react'



import WalletInfo from "../Wallet/WalletInfo"

const contentStyle = {
  marginTop: "5em",
  width: "100%",
  minHeight: "calc(100vh - 70px)",
};


export default class StickyLayout extends Component {
  render() {
    return (

    <Grid columns="equal" style={contentStyle}>
      <Grid.Column width="12">

        {
          React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child, {})
          })
        }
      </Grid.Column>

      <Grid.Column>
        <Container  style={{width: "420px", marginTop: "4em"}}>
          <WalletInfo/>
        </Container>
      </Grid.Column>
    </Grid>


    )
  }
}
