import React from 'react'

const cards = [
    {name:'home', color:'bg-red-500 col-span-2 row-span-2'},
    {name:'projects',color:'bg-purple-400 col-span-2'},
    {name:'projects',color:'bg-purple-400 '},
    {name:'projects',color:'bg-purple-400 '},
    {name:'projects',color:'bg-purple-400 '},
    {name:'projects',color:'bg-purple-400 '},
    {name:'projects',color:'bg-purple-400 '},
    {name:'projects',color:'bg-purple-400 '}
]

const BentoColumns = () => {
  return (
    <div className='grid grid-cols-2 gap-2 p-2 grid-flow-row h-full'>
        {cards.map((card,index)=>(
            <div className={`${card.color} w-full h-full rounded-md`}>
                <span>{card.name}</span>
            </div>
        ))}
    </div>
  )
}

export default BentoColumns