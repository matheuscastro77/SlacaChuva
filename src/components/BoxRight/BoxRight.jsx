import React from "react";
import { Main, Container, H1, Text, Span, P1, H4, H5, P, ContainerButtons, DivButtons, ButtonDownload, Button, H4Tittle } from "./styled";
import star from "../../assets/star.png"
import doi from "../../assets/doi.png"
import download from "../../assets/download.png"

const BoxRight = () => {
  return (
    <Main>
      <ContainerButtons>
          <DivButtons>
              <ButtonDownload> <img src={download}/> Download</ButtonDownload>
              <Button> <img src={star}/> </Button>
              <Button> <img src={doi}/> </Button>
          </DivButtons>
          <H4Tittle>COMO CITAR ESSE TRABALHO?</H4Tittle>
        </ContainerButtons>
      <Container>
      <H1>Detalhes</H1>
      <Text>
        <P1> Tipo de Apresentação:  <Span> Pôster </Span></P1>
        <P1> Eixo temático:  <Span> Alimentação e saúde (AS)</Span></P1>
        <P1> Palavras-chaves: <Span> Alimentos, funcionais, alimentação escolar </Span></P1>
        <H4>Autores</H4>
        <H5>Galileo Galilei¹</H5>
        <H5>Berta Lange de Morretes²</H5>
        <H5>Isaac Newton³</H5>
        <H5>Cesar Lattes¹</H5>
        <H5>Stephen Hawking⁴</H5>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
        <P>
          ¹Universidade Estadual de Campinas ²Universidade de São Paulo
          ³Instituto Nacional de Pesquisas Espaciais ⁴Universidade Federal do
          Rio de Janeiro ¹Universidade Estadual de Campinas
        </P>
      </Text>
      </Container>
    </Main>
  );
};

export default BoxRight;
