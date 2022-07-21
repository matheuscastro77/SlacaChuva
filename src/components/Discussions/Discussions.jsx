import React, { useContext } from "react";
import GlobalStateContext from "../../context/GlobalStateContext";
import {
  H3,
  Main,
  TittleDiv,
  Container,
  DivIcons,
  Border,
  Button,
  ButtonFeedback,
  ButtonFind,
  CommentsDiv,
  DivCenter,
  SendButton,
  ContainerOptionsComment,
  DivOptions,
  DivInput,
  P,
  Label,
  Input,
  TextArea,
  FooterTextArea,
  ContainerTopicSend,
  FeedbackCard,
  ContainerComment,
  ContainerComment2
} from "./styled";
import icon1 from "../../assets/icone1.png";
import icon2 from "../../assets/icone2.png";
import icon3 from "../../assets/icone3.png";
import cruz from "../../assets/cruz.png";
import info from "../../assets/infos.png";
import italico from "../../assets/italico.png";
import negrito from "../../assets/negrito.png";
import favoritar from "../../assets/favoritar.png";

const Discussions = () => {
  const {
    newTopic,
    setNewTopic,
    sendTopic,
    setSendTopic,
    comment1,
    setComment1,
    comment2,
    setComment2,
  } = useContext(GlobalStateContext);

  const setState = () => {
    setNewTopic(true);
    setSendTopic(false);
  };

  return (
    <Main>
      <TittleDiv>
        <H3>Discussões</H3>
      </TittleDiv>
      {newTopic ? (
        <>
          {sendTopic ? (
            <ContainerTopicSend>
              <h2>Seu tópico foi enviado com sucesso! :D</h2>
              <p>
                Agradecemos por sua contribuição, uma notificação será enviada
                ao seu email assim que seu tópico for respondido!
              </p>
              <ButtonFind>Descubra outros trabalhos!</ButtonFind>
              <Border>
                <ButtonFeedback onClick={() => setState()}>
                  criar novo tópico
                </ButtonFeedback>
              </Border>
              <FeedbackCard/>
            </ContainerTopicSend>
          ) : (
            <>
              <P>
                {" "}
                Tem uma dúvida ou sugestão? Compartilhe seu feedback com os
                autores{" "}
              </P>
              <DivInput>
                <Label>Assunto</Label>
                <Input placeholder="Defina um tópico sucinto para notificar os autores..."></Input>
                <Label>Conteúdo</Label>
                <TextArea />
                <ContainerOptionsComment>
                  <FooterTextArea>
                    <div>
                      <button>
                        <img src={negrito} />
                      </button>
                      <button>
                        <img src={italico} />
                      </button>
                    </div>
                  </FooterTextArea>
                  <SendButton onClick={() => setSendTopic(true)}>
                    Enviar
                  </SendButton>
                </ContainerOptionsComment>
              </DivInput>
            </>
          )}
        </>
      ) : (
        <>
          <Container>
            <h3>Compartilhe suas ideias ou dúvidas com os autores!</h3>
            <DivIcons>
              <img src={icon1} />
              <img src={icon2} />
              <img src={icon3} />
            </DivIcons>
            <p>
              Sabia que o maior estímulo no desenvolvimento científico e
              cultural é a curiosidade? Deixe seus questionamentos ou sugestões
              para o autor!
            </p>
          </Container>
          <Border>
            <Button onClick={() => setNewTopic(true)}>
              {" "}
              <img src={cruz} /> criar tópico
            </Button>
          </Border>
        </>
      )}

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
            <button onClick={() => setComment1(!comment1)}>1 reposta</button>
          </DivOptions>
        </DivCenter>
      </CommentsDiv>
      {comment1 ? (
        <ContainerComment>
          <h4>Adriano da Silva</h4>
          <p>
            Resposta do autor é aqui. Relato inscreve-se no campo da análise da
            dimensão e impacto de processo formativo situado impacto de processo
            formativo processo resente relato inscreve-se no campo da análise da
            dimensão e impacto de processo formativo situado impacto de processo
            formativo processo.
          </p>
        </ContainerComment>
      ) : null}
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
            <button onClick={() => setComment2(!comment2)}>4 reposta</button>
          </DivOptions>
        </DivCenter>
      </CommentsDiv>
      {comment2 ? (
        <>
          <ContainerComment>
            <h4>Camila Ferreira Andrade</h4>
            <p>
              Também ínteressante lembrar que o relato inscreve-se no campo da
              análise da dimensão e impacto de processo formativo situado
              impacto de processo formativo processo resente relato inscreve-se
              no campo da análise da dimensão e impacto de processo formativo
              situado impacto de processo formativo processo.
            </p>
            <p>
              Situado impacto de processo formativo processo resente relato
              inscreve-se no campo da análise da dimensão e impacto de processo
              formativo situado impacto de processo formativo processo.
            </p>
          </ContainerComment>
          <ContainerComment2>
            <h4>Ana Carolina</h4>
            <p>
              Resposta do autor é aqui. Relato inscreve-se no campo da análise
              da dimensão e impacto de processo formativo situado impacto de
              processo formativo processo resente relato inscreve-se no campo da
              análise da dimensão e impacto de processo formativo situado
              impacto de processo formativo processo.
            </p>
          </ContainerComment2>
        </>
      ) : null}
    </Main>
  );
};

export default Discussions;
