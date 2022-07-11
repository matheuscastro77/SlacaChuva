import React from "react";
import {
  H3,
  Main,
  TittleDiv,
  Container,
  DivIcons,
  Border,
  Button,
  CommentsDiv,
  DivCenter,
  DivOptions,
} from "./styled";
import icon1 from "../../assets/icone1.png";
import icon2 from "../../assets/icone2.png";
import icon3 from "../../assets/icone3.png";
import cruz from "../../assets/cruz.png";
import info from "../../assets/infos.png";
import favoritar from "../../assets/favoritar.png";

const Discussions = () => {
  return (
    <Main>
      <TittleDiv>
        <H3>Discussões</H3>
      </TittleDiv>
      <Container>
        <h3>Compartilhe suas ideias ou dúvidas com os autores!</h3>
        <DivIcons>
          <img src={icon1} />
          <img src={icon2} />
          <img src={icon3} />
        </DivIcons>
        <p>
          Sabia que o maior estímulo no desenvolvimento científico e cultural é
          a curiosidade? Deixe seus questionamentos ou sugestões para o autor!
        </p>
      </Container>
      <Border>
        <Button>
          {" "}
          <img src={cruz} /> criar tópico
        </Button>
      </Border>

      <CommentsDiv>
        <DivCenter>
          <h4>Assunto da pergunta aparece aqui</h4>
          <h5>Carlos Henrique Santos</h5>
          <p>
            Comecinho da pergunta aparece aqui resente relato inscreve-se no
            campo da análise da dimensão e impacto de processo formativo situado
            impacto de processo formativo processo...
          </p>
          <DivOptions>
            <button>
              <img src={info} />
            </button>
            <button>
              <img src={favoritar} />
            </button>
            <p>1 like</p>
            <button>1 reposta</button>
          </DivOptions>
        </DivCenter>
      </CommentsDiv>

      <CommentsDiv>
      <DivCenter>
          <h4>Assunto da pergunta aparece aqui</h4>
          <h5>Carlos Henrique Santos</h5>
          <p>
            Comecinho da pergunta aparece aqui resente relato inscreve-se no
            campo da análise da dimensão e impacto de processo formativo situado
            impacto de processo formativo processo resente relato inscreve-se no
            campo da análise da dimensão e impacto de processo formativo situado
            impacto de processo formativo processo?
          </p>
          <DivOptions>
            <button>
              <img src={info} />
            </button>
            <button>
              <img src={favoritar} />
            </button>
            <p>4 like</p>
            <button>4 reposta</button>
          </DivOptions>
        </DivCenter>
        </CommentsDiv>
    </Main>
  );
};

export default Discussions;
