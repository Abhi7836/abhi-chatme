import React,{ useState,useEffect} from 'react'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import Header from './components/Header';
import axios from 'axios';


const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';



function HomeScreen() {
    const [name,setname]=useState({
        first:"",
        last:" ",
      });
     const username = localStorage.getItem('username');
     const password =  localStorage.getItem('password');
     const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
      
  useEffect(() => {
     async function fetchData() {
         try {
           await axios.get('https://api.chatengine.io/users/me/', { headers: authObject })
             .then(res=>{ console.log(res);
               setname({
               first:res.data.first_name,
               last:res.data.last_name,
             })})
         } catch (e) {//console.error(e);
          }
     };
     fetchData();
 }, []);

 
    return (
    <div>
    <Header first={name.first} last={name.last}/>
    <ChatEngine
      height="93vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
        </div>
    )
}

export default HomeScreen
