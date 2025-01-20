import React from 'react'


const mensajes = [
    {msg:'Hola soy el bot', agent:'bot'},
    {msg:'mensaje', agent:'user'}
]
const AboutMe = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-around'>
        <span>Sobre Mi</span>
        <div className='w-full px-2'>
            <input className='w-full border-x-gray-400 p-2 rounded-full'></input>
            <div>
                {
                    mensajes.map((msg,index)=>(
                        <div className={`${msg.agent == 'bot'?'bg-slate-400 place-self-start':'bg-blue-400 place-self-end'} w-fit p-2 rounded-md`}>{msg.msg}</div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default AboutMe