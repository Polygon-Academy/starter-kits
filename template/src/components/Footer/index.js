import React, { Component } from 'react'
import { Image, Container } from 'semantic-ui-react';
import styles from './footer.module.css';
import logo from '../../assets/polygon-logo.svg'

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <footer className={styles.footer}>
          <div className={styles.created}>
            Created by
            <Image size='small' src={logo}/>
          </div>
          <div className={styles.copyright}>Copyright © 2021 Polygon technology</div>
        </footer>
      </Container>
    )
  }
}
