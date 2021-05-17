import React,{ useState} from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import SignupForm from './components/SignupForm';
import "antd/dist/antd.css";
import './App.css';

const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';

function App() {
  const [login,setLogin]=useState(true);
  //const userid = localStorage.getItem('userid');
  
 
  function setloginstate(s) {
    setLogin(s);
  }


  if (!localStorage.getItem('username')) 
 { return (
   <>
   {login?<LoginForm loginstate={setloginstate} />:<SignupForm loginstate={setloginstate} />}
 </>
 )}

  return (
    <div>
    <Header/>
    <ChatEngine
      height="93vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
    </div>

  );
}

export default App
