import React,{ useState,useEffect} from 'react';
import axios from 'axios';
import {Navbar} from 'react-bootstrap'
import { Button} from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';

const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';

function Header() {
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
            .then(res=>{ //console.log(res);
              setname({
              first:res.data.first_name,
              last:res.data.last_name,
            })})
        } catch (e) {//console.error(e);
         }
    };
    fetchData();
}, []);

    function clearlogs(){
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('userid');
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
            Welcome  {name.first} {name.last}
          </Navbar.Text>
          </Navbar.Collapse>
       
          <Navbar.Collapse className="justify-content-end mr-5 pr-3">
          <Button
           style={{backgroundColor:'#7554a0',color:'white',borderColor:'#7554a0'}}
           icon={<PoweroffOutlined />}
           onClick={clearlogs}>Logout</Button>
           </Navbar.Collapse>
         </Navbar>
         
  
        </>
    )
}

export default Header
