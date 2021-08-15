import React, {Component} from 'react'
import {Image, Container} from 'semantic-ui-react';
import './footer.css';
import logo from '../../assets/polygon-logo.svg'

export default class StickyLayout extends Component {
  render() {
    return (
    <Container>
      <footer className="footer">
        <div className="created">
          Created by
          <Image size='small' src={logo} style={{marginLeft: "10px"}}/>
        </div>
        <div className="copyright">Copyright © 2021 Polygon technology</div>
      </footer>
    </Container>
    )
  }
}
