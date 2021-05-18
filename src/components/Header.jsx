import React from 'react';
import {Navbar} from 'react-bootstrap'
import { Button} from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';

function Header(props) {
      //console.log(props)
    function clearlogs(){
      localStorage.removeItem('username');
      localStorage.removeItem('password');
      localStorage.removeItem('userid');
      window.location.reload();
    }

    return (
        <>
         <Navbar className="p-0" style={{backgroundColor:'#7554a0', maxWidth:'100%'}} variant="dark" >
          <Navbar.Brand  className="pl-5 navlogo" > {/*href="#home"*/}
             <img
               alt=""
               src="speech-bubble.png"
               width="30"
               height="30"
               className="d-inline-block align-top pr-1"
               style={{display:'inline-block'}}
               /><span className="navhed" >{' '}Abhi-chatme</span>
         </Navbar.Brand>
         <Navbar.Collapse className=" justify-content-center pl-2 mr-3 navcol"  >
          <Navbar.Text style={{color:'white',textAlign:'center'}}>
            Welcome {props.first} {props.last}
          </Navbar.Text>
          </Navbar.Collapse>
       
          <Navbar.Collapse className="justify-content-end mr-3 pr-3">
          <Button
           style={{backgroundColor:'#7554a0',borderColor:'#7554a0'}}
           icon={<PoweroffOutlined />}
           onClick={clearlogs}><span className="navhed" >Logout</span></Button>
           </Navbar.Collapse>
         </Navbar>
         
  
        </>
    )
}

export default Header
