import React,{ useState} from 'react';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import HomeScreen from './HomeScreen';
import "antd/dist/antd.css";
import './App.css';


function App() {
  const [login,setLogin]=useState(true);
  function setloginstate(s) {setLogin(s);}
  if (!localStorage.getItem('username')) 
 { return (
   <>
   {login?<LoginForm loginstate={setloginstate} />:<SignupForm loginstate={setloginstate} />}
 </>
 )}
  return (
    <div>
    <HomeScreen />
    </div>

  );
}

export default App
