import React from 'react'
import axios from 'axios';
import { Image,Popconfirm } from 'antd';
import {DeleteOutlined  } from '@ant-design/icons';

const projectID ='14f5d563-3afb-4010-b0f0-6080b252d534';

function MyMessage({ message,chatid }) {
  
  const confirm = async (e) => {
    e.preventDefault();
    var delmsg = {
    method: 'delete',
    url:`https://api.chatengine.io/chats/${chatid}/messages/${message.id}/`,
    headers: {'Project-ID':projectID,
              'User-Name':'Abhi@7836',
              'User-Secret':'123'
                }
  };
  
    try {
      await  axios(delmsg).then(res=>{
        window.location.reload();
      }); 
    } catch (err) {
      
    }
    
  }


  if (message.attachments && message.attachments.length > 0) {
    return (  
    <>
     <Image
        src={message.attachments[0].file}
        className="message-image"
        style={{ float: 'right'}}
      />  
      <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
      className="message-avatar"
     
       ><DeleteOutlined />
     </Popconfirm>
    </>


      
    );
  }

  return (
    <>
     <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
      {message.text} </div>
      <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      okText="Yes"
      cancelText="No"
      className="message-avatar"
     
       ><DeleteOutlined />
     </Popconfirm>
    </>
  );
}

export default MyMessage