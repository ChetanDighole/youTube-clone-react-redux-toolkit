import React from 'react'

const ChatMessage = ({name , message}) => {
    return (
        <div className='flex items-center shadow-sm p-2'>

            <img draggable="false" alt="" height="24" width="24" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLFyklTyf5ygXXYWOT7Y9PGAhrroaErtDcA&usqp=CAU" />
            <span className='font-bold px-2'>{name}</span>
            <span>{message}</span>

        </div>
    )
}

export default ChatMessage
