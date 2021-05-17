import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Button } from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';

function Header() {
    const userName = localStorage.getItem('username');

   /*try {
      await axios.get('https://api.chatengine.io/users', { headers: authObject });
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      window.location.reload();
      setError('');
    } catch (err) {
       
     
      setError('Oops, incorrect credentials.');   
    }*/

    function clearlogs(){
        localStorage.removeItem('username'); 
        localStorage.removeItem('password'); 
        window.location.reload();
    }
    return (
        <>
         <Navbar className="p-0" style={{backgroundColor:'#7554a0'}} variant="dark" >
          <Navbar.Brand className="pl-5" > {/*href="#home"*/}
             <img
               alt=""
               src="speech-bubble.png"
               width="30"
               height="30"
               className="d-inline-block align-top pr-1"/>{' '}
               Abhi-chatme
         </Navbar.Brand>
         <Navbar.Toggle />
         <Navbar.Collapse className="justify-content-center pl-5" >
          <Navbar.Text style={{color:'white'}}>
            Welcome  {userName}
          </Navbar.Text>
          </Navbar.Collapse>
       
          <Navbar.Collapse className="justify-content-end mr-5 pr-3">
          <Button
           style={{backgroundColor:'#7554a0',borderColor:'#7554a0'}}
           icon={<PoweroffOutlined />}
           onClick={clearlogs}/>
           </Navbar.Collapse>
         </Navbar>
         
  
        </>
    )
}

export default Header
