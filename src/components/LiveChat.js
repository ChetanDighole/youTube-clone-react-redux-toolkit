import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';
import ChatMessage from './ChatMessage'



const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages)

    const [liveMessage, setLiveMessage] = useState("")

    useEffect(() => {
        const i = setInterval(() => {

            //API poling

            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))

        }, 1000)

        return (() => {
            clearInterval(i)
        })

    }, [])

    return (
        <>
            <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>

                <div>
                    {
                        chatMessages.map((c, index) => <ChatMessage key={index} name={c.name} message={c.message} />)
                    }
                </div>

            </div>



            <form className='w-full p-2 ml-2 border rounded border-black flex gap-2' onSubmit={(e)=>{
                e.preventDefault();
                dispatch(addMessage({
                    name: "Chetan Dighole",
                    message: liveMessage,
                }))
                setLiveMessage("")
            }}>
                <input value={liveMessage}
                onChange={(e)=> {setLiveMessage(e.target.value)}}
                type="text" className='px-2 w-[90%] border border-black' />
                <button className='mx-2 px-2 bg-red-600 rounded-sm text-white'>send</button>
            </form>
        </>
    )
}

export default LiveChat
