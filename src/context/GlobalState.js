import React, { useState } from "react";
import GlobalStateContext from "./GlobalStateContext"

const GlobalState = (props) => {

  const [newTopic, setNewTopic] = useState(false)
  const [verMais, setVerMais] = useState(false)
  const [sendTopic, setSendTopic] = useState(false)
  const [comment1, setComment1] = useState(false)
  const [comment2, setComment2] = useState(false)

 
  return (
    <GlobalStateContext.Provider value={{ newTopic, setNewTopic, verMais, setVerMais, sendTopic, setSendTopic, comment1, setComment1, comment2, setComment2 }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}
export default GlobalState
