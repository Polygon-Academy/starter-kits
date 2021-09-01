import {Web3ReactProvider} from '@web3-react/core';
import {Web3Provider} from '@ethersproject/providers';

import Header from './components/Header';
import Footer from './components/Footer';

import Content from './components/Containers';
import {Container, Image} from 'semantic-ui-react';
import iconDevx from "./assets/icon-devx.svg"

import './App.css';

const getLibrary = (provider) => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 8000;
  return library;
};

function App() {
  return (
  <Web3ReactProvider getLibrary={getLibrary}>
    <div className="App">
      <Header/>
      <Content>
        <Container text textAlign='center'>
          <Image centered size='tiny' src={iconDevx} style={{marginBottom:"2em"}}/>
          <p>Create React Ethereum DApp on Polygon</p>
          <p>Build your first app with Starter Kits</p>
        </Container>
      </Content>
      <Footer/>
    </div>
  </Web3ReactProvider>
  );
}

export default App;
