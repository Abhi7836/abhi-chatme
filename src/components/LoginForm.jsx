import React,{ useState } from 'react';
import { Input} from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

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
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
      
    }


  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat - login</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <button onClick={changelogin} className="button">
              <span>Signup?</span>
        </button>
        <h1>{error}</h1>
      </div>
    </div>

  );
}

export default LoginForm
