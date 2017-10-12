import React, { Component } from 'react';
import Posts from './components/Posts';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const AppWrapper = styled.div`


`
class App extends Component {
  render() {
    return (
      <AppWrapper>
        <div>
        <Navbar />
        </div>
        <div>
        <Posts />
        </div>
      </AppWrapper>
    );
  }
}

export default App;
