import React from 'react'
import { Main, Container, Body } from './styled'
import BoxLeft from '../../components/BoxLeft/BoxLeft';
import BoxRight from '../../components/BoxRight/BoxRight';
import Video from '../../components/Video/Video';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <Main>
      <BoxLeft />
      <Body>
      <Header/>
      <Container>
      <Video />
      <BoxRight />
      </Container>
      </Body>
    </Main>
  )
}

export default Home 
