import React from "react";
import { Main, Tittle, P, Span, Container, LanguageButton, P1, P2, ContainerMain, Img } from "./styled";
import foto from '../../assets/person.png'
import language from '../../assets/language.png'
import dropdown from '../../assets/dropdown.png'

const Header = () => {
  return (
    <Main>
      <ContainerMain>
        <Tittle>
          <Span>
            Anais do Simpósio Latino Americano de Ciências de Alimentos
          </Span>
          <P>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos</P>
          <Span>ISSN: 1234-5678</Span>
        </Tittle>
        <Container>
        <LanguageButton> <img src={language}/> PT, BR <img src={dropdown}/> </LanguageButton>

          <div>
         <P1>Bem vindo!</P1>
         <P2>alguem12@galoascience.com</P2>
          </div>
          <Img alt="foto do usuário" src={foto} />
        </Container>
      </ContainerMain>
    </Main>
  );
};

export default Header;
