import { useState } from 'react';
import axios from 'axios';

const projectID = '14f5d563-3afb-4010-b0f0-6080b252d534';
const private_key='7e38b731-a6fd-4252-a3af-c6edce2cea0d';

const SignupForm = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [error, setError] = useState('');

  function changelogin() {props.loginstate(true);}
    //console.log(userdata);

      const handleSubmit = async (e) => {
        e.preventDefault();

        const userdata ={
          "username": username,
          "secret": password,
          "email": email,
          "first_name": firstname,
          "last_name":lastname,
        //	"custom_json": {"fav_game": "Candy Crush", "high_score": 2002}
       }

       var config = {
        method: 'post',
        url: 'https://api.chatengine.io/users/',
        headers: {'PRIVATE-KEY':private_key },
        data : userdata
      };
        try {
          await  axios(config); 
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
        <h1 className="title">Chat - Signup</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" placeholder="Email" required />
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="input" placeholder="First Name" required />
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} className="input" placeholder="LastName" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
          </div>
        </form>
        <button onClick={changelogin} className="button">
              <span>Login?</span>
        </button>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default SignupForm;
