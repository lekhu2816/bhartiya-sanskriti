import React, { useState ,useRef ,useEffect} from "react";
import "./chatBox.css";
const ChatBox = () => {
  const [message, setMessage] = useState([]);
  const [userInput, setuserInput] = useState("");
  const chatContainerRef = useRef(null);

  const handleSend=()=>{
    if(userInput.trim()){
        setMessage((prevMessage)=>[...prevMessage,{text:userInput,sender:"user"}]);
    }
    setuserInput("");
    setTimeout(()=>{
       setMessage((prevMessage)=>[...prevMessage,{text:"This is response from bot",sender:"bot"}])
    },1000)
  }
  useEffect(() => {
    console.log(chatContainerRef.current.scrollHeight)
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
