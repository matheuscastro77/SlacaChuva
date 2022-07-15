import React from "react";
import { Main, Container, Body, ContainerInfo } from "./styled";
import BoxLeft from "../../components/BoxLeft/BoxLeft";
import BoxRight from "../../components/BoxRight/BoxRight";
import Video from "../../components/Video/Video";
import Summary from "../../components/Summary/Summary";
import Discussions from "../../components/Discussions/Discussions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Main>
      <BoxLeft />
      <Body>
        <Header />
        <ContainerInfo>
        </ContainerInfo>
        <Container>
          <Video />
          <BoxRight />
        </Container>
        <Summary />
        <Discussions />
        <Footer />
      </Body>
    </Main>
  );
};

export default Home;
