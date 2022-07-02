import './App.css';
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  Avatar, ChatContainer, ConversationHeader, Message,
  MessageInput, MessageList, TypingIndicator
} from "@chatscope/chat-ui-kit-react";
import { useEffect, useRef, useState } from 'react';
import emilyIco from "./logo.svg";
function App() {
  
  const [xDeg, setxDeg] = useState(0)
  var sceenheigh=800
  var enBuyuk=0;
  function AllData(params) {   
    for(var i=0;i<params.target.children.length;i++){
      var scrennList=params.target.children[i].offsetTop-params.target.scrollTop;
      if(scrennList>0){
        if(sceenheigh-100>scrennList){
          if(scrennList>enBuyuk)
          {
            setxDeg(i);
             console.log(`İD[${i}] Height:[${params.target.children[i].offsetHeight}] Top:[${params.target.children[i].offsetTop-params.target.scrollTop}]` , )
          }
        }
      }
    }
  }
  const MsgRef=useRef()
  useEffect(() => {
    const collection = document.getElementsByClassName("cs-message-list__scroll-wrapper")[0];
    collection.addEventListener("scroll",(e)=>AllData(e))
    console.log("collection",collection)

   
  }, [MsgRef])
  

  const chaMessage=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]


  return (
    <div style={{
      height: sceenheigh,
      width: "400px",

    }}>
      <ChatContainer>
        <ConversationHeader>
          <Avatar src={emilyIco} name="Emily" />
          <ConversationHeader.Content userName="Emily" info="Active 10 mins ago" />
        </ConversationHeader>
        <MessageList ref={MsgRef}    typingIndicator={<TypingIndicator content="Emily is typing" />}>
          {
            chaMessage.map((element,index)=>{
              if(index ==xDeg-1){
               return( <Message
                style={{backgroundColor:"red"}}
                model={{
                message: element,
                sentTime: "15 mins ago",
                sender: "Emily",
                direction: "incoming",
                position: "single"
              }}>
                <Avatar src={emilyIco} name={"Emily"} />
              </Message>)
              }
              else if(index ==xDeg-2){
                
                  return( <Message
                    style={{backgroundColor:"red"}}
                   model={{
                   message: element,
                   sentTime: "15 mins ago",
                   sender: "Emily",
                   direction: "incoming",
                   position: "single"
                 }}>
                   <Avatar src={emilyIco} name={"Emily"} />
                 </Message>)
                 
              }
              else{
                return(<Message   model={{
                
                  message: element,
                  sentTime: "15 mins ago",
                  sender: "Emily",
                  direction: "incoming",
                  position: "single"
                }}>
                  <Avatar src={emilyIco} name={"Emily"} />
                </Message>)
              }

              
            })
          }
          

        </MessageList>
        <MessageInput placeholder="Type message here" sendButton={false} attachButton={false} />
        {/* <InputToolbox>
          <AttachmentButton />
          <SendButton />
        </InputToolbox> */}
      </ChatContainer>
     
    </div>
  );
}

export default App;
