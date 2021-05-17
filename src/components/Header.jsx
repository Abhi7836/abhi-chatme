import React from 'react'
import {Navbar} from 'react-bootstrap'
import { Button } from 'antd';
import {PoweroffOutlined} from '@ant-design/icons';

function Header() {
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
               src="logo.jpeg"
               width="30"
               height="30"
               className="d-inline-block align-top pr-1"/>{' '}
               Abhi-chatme
           </Navbar.Brand>
           <Button
           style={{backgroundColor:'#7554a0',borderColor:'#7554a0'}}
           icon={<PoweroffOutlined />}
           onClick={clearlogs}/>
         </Navbar>
        </>
    )
}

export default Header
