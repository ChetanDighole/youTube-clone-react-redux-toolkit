import React from 'react'

const Comment = ({data}) => {
    const {name , text , replies} = data
    
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 my-2 rounded'>
        <img alt='user' className='w-12 h-12' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' />

        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p className=''>{text}</p>
        </div>

    </div>
  )
}

export default Comment
