import React, { useEffect, useState } from "react";
import { Main, Tittle, ButtonContainer, Button, SelectButton } from "./styled";
import logo from '../../assets/logo.png'

const BoxLeft = () => {
  return <Main>
    <Tittle><span>SLACA 2019</span></Tittle>
    <img alt="logo" src={logo}/>
    <ButtonContainer>
    <Button>Apresentação</Button>
    <Button>Comitês</Button>
    <Button>Autores</Button>
    <Button>Eixos temáticos</Button>
    <SelectButton>Trabalhos</SelectButton>
    <Button>Contato</Button>
    </ButtonContainer>
  </Main>;
};

export default BoxLeft;
