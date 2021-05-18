import { useState} from 'react';
import axios from 'axios';
import { Button,Alert} from 'antd';


const private_key='7e38b731-a6fd-4252-a3af-c6edce2cea0d';



const SignupForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');
  
  function changelogin() {props.loginstate(true);}
   
      const handleSubmit = async (e) => {
        e.preventDefault();

        const userdata ={
          "username": username,
          "secret": password,
          "email": email,
          "first_name": firstname,
          "last_name":lastname,
       }
       var userconfig = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {'PRIVATE-KEY':private_key },
        data : userdata
      };
      
        try {
          await  axios(userconfig).then(res=>{console.log("HI");
            
          localStorage.setItem('userid', res.data.id);
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          console.log("HI");
         window.location.reload();
          setError('');}); 
        } catch (err) {
          setError('Something went wrong! Contact Admin');
        }

  };

  return (
  <>
  {error && (<Alert message= {error}  type="error" style={{textAlign:'center'}}  />)}
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat - Signup</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="input" placeholder="First Name" required />
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="input" placeholder="LastName" required />
          <div align="center">
            <Button type="primary" shape="round" size={'large'} htmlType="submit">
              <span>Start chatting</span>
            </Button>
            <Button type="primary" shape="round" size={'large'} onClick={changelogin} className="ml-5 px-5">
              <span>Login?</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  </>
  );
};

export default SignupForm;
