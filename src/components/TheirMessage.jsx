import React from 'react'
import { Image } from 'antd';

function TheirMessage({ lastMessage, message }) {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className={message.sender.avatar && "message-avatar"}
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        >{!message.sender.avatar && (<span className="message-header">{ message.sender.username}</span>) }
        </div>
      )}

      {message.attachments && message.attachments.length > 0
        ? (
          <Image
           src={message.attachments[0].file}
           className ="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (<>
          <div className="message" 
           style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
           {message.text}
          </div>
          </>
        )}
    </div>
  );
}

export default TheirMessage