import React, { useState ,useRef ,useEffect, useContext} from "react";
import "./chatBox.css";
import { StoreContext } from "../../storeContext/storeContext";
import axios from "axios";
const ChatBox = () => {
  const {SERVER_URL, message,setMessage}=useContext(StoreContext)
  
  const [userInput, setuserInput] = useState("");
  const chatContainerRef = useRef(null);

  const handleSend=async()=>{
    const url=`${SERVER_URL}/api/ai/get-response`;
    if(userInput.trim()){
        setMessage((prevMessage)=>[...prevMessage,{text:userInput,sender:"user"}]);
        
    }
    setuserInput("");
   const response = await axios.post(url,{message:`${userInput} 
    ...if the given above prompt does not related to indian culture fashion arts and tradition then say "i have no idea related to this" otherwise generate the response not more than 3 lines`})
   console.log(response)
   if(response.data.success){
    setMessage((prevMessage)=>[...prevMessage,{text:[response.data.data],sender:"bot"}])
   
   }
   
  }
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [message]);
  
  return (
    <div className="chatbox">
      <div className="card2">
        <div className="chatbox-header">
          <p>Let's Chat</p>
        </div>
        <div className="chat-desc" ref={chatContainerRef}>
            {message.map((msg,index)=>(
             <div key={index} className={`message ${msg.sender==="user"?"user-message":"bot-message"}`}> 
             <p>{msg.text}</p>
             </div>
            ))}
        </div>
        <div className="user-input">
          <input
            onChange={(e) => setuserInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            value={userInput}
            type="text"
            placeholder="Ask me something"
          />
          <button onClick={handleSend}>
            Send <i className="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
