import React,{ useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import './App.css';

const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';


function App() {
  const [login,setLogin]=useState(true);
  function setloginstate(s) {
    setLogin(s);
  }
//  if (!localStorage.getItem('username')) return <LoginForm />;

  if (!localStorage.getItem('username')) 
 { return (
   <>
   {login?<LoginForm loginstate={setloginstate} />:<SignupForm loginstate={setloginstate} />}
 </>
 )}

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />

  );
}

export default App
