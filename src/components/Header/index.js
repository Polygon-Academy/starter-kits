import React, {Component} from 'react'
import {
  Container,
  Image,
  Menu,
  Visibility,
} from 'semantic-ui-react'

import logo from '../../assets/polygon-logo.svg'
import ConnectWallet from '../Wallet/ConnectWallet'

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  marginTop: '4em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
};

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
};


export default class Header extends Component {
  state = {
    menuFixed: true,
  };

  render() {
    const {menuFixed} = this.state;

    return (
    <div>
      <Visibility
      onBottomPassed={this.stickTopMenu}
      onBottomVisible={this.unStickTopMenu}
      once={false}
      >
        <Menu
        borderless
        fixed={menuFixed ? 'top' : undefined}
        style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container>
            <Menu.Item>
              <Image size='small' src={logo}/>
            </Menu.Item>
            <Menu.Item header>Start-Kit</Menu.Item>
            <Menu.Item as='a' link={true} href="https://docs.matic.network/docs/develop/getting-started" target="_blank">Docs</Menu.Item>
            <Menu.Item as='a' link={true} href="https://polygon-tutorial.solidstake.net" target="_blank">Tutorial</Menu.Item>

            <Menu.Menu position='right'>
              <ConnectWallet/>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    </div>
    )
  }
}
