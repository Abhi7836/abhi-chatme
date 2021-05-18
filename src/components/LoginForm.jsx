import React,{ useState} from 'react';
//import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button,Alert} from 'antd';
import axios from 'axios';

const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';


function LoginForm(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function changelogin() {
    props.loginstate(false);}

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })
      .then(res=>{//console.log(res)
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
      setError('');
    });
     
    } catch (err) {
      setError('Oops, incorrect credentials.');
      setPassword('');  
    }


};

  return (
    <>
    {error && (<Alert message= {error}  type="error" style={{textAlign:'center'}}  />)}
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat - login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          <div align="center">
            <Button type="primary" shape="round" size={'large'} htmlType="submit">
              <span>Start chatting</span>
            </Button>
            <Button type="primary" shape="round" size={'large'} onClick={changelogin} className="ml-5 px-5">
              <span>Signup?</span>
            </Button>
          </div>
        </form>
      </div>
  </div>
  </>
  );
}

export default LoginForm
