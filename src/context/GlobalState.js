import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

  const [newTopic, setNewTopic] = useState(false)
  const [verMais, setVerMais] = useState(false);
  const [sendTopic, setSendTopic] = useState(false);

 
  return (
    <GlobalStateContext.Provider value={{ newTopic, setNewTopic, verMais, setVerMais, sendTopic, setSendTopic }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
