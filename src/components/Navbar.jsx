import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';
const Wrapper = styled.div`
background-color: white;
display: flex;
justify-content: space-between;
padding: 26px 5vw;
height: 35px;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,.0975);

`

const LeftCol = styled.div`
font-size: 30px;
    margin: 0;
    svg{
      margin-bottom: 5px;
    }

`;
const MiddleCol = styled.div`
background: lightgray;
border: 1px solid #dbdbdb;
width: 25%;
padding: 7px;
border-radius: 3px;
color: #999;
svg{
  margin-bottom: 5px;
}
input{
  background-color: transparent;
  border: none;
  font-weight: 200;
}
`;
const RightCol = styled.div`
width: 25%;
dis[lay: flex;
justify-content: space-around;
`;

class Navbar extends Component{
  render(){
    return (
      <Wrapper>
        <LeftCol><FaInstagram /> | Instaclone</LeftCol>
       <MiddleCol>
        <FaSearch/><input type="text"/>
        </MiddleCol>
        <RightCol>
          <FaCompass size={25}/>
          <FaHeartO size={25}/>
          <FaUser size={25}/>
        </RightCol>
      </Wrapper>
    );
  }
}

export default Navbar