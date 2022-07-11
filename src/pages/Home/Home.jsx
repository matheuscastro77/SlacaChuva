import React from "react";
import { Main, H1, Container, DivButtons, ContainerButtons, Button, ButtonDownload, H4, Body, ContainerInfo } from "./styled";
import BoxLeft from "../../components/BoxLeft/BoxLeft";
import BoxRight from "../../components/BoxRight/BoxRight";
import Video from "../../components/Video/Video";
import Summary from "../../components/Summary/Summary";
import Discussions from "../../components/Discussions/Discussions";
import Header from "../../components/Header/Header";
import star from "../../assets/star.png"
import doi from "../../assets/doi.png"
import download from "../../assets/download.png"
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Main>
      <BoxLeft />
      <Body>
        <Header />
        <ContainerInfo>
        <H1>
          Análise sensorial de preparações funcionais desenvolvidas para
          escolares entre 09 e 15 anos, do município de Campinas/SP
        </H1>
        <ContainerButtons>
          <DivButtons>
              <ButtonDownload> <img src={download}/> Download</ButtonDownload>
              <Button> <img src={star}/> </Button>
              <Button> <img src={doi}/> </Button>
          </DivButtons>
          <H4>COMO CITAR ESSE TRABALHO?</H4>
        </ContainerButtons>
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
