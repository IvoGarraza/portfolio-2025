import React from 'react'

const cards = [
    {name:'home', color:'bg-red-500'},
    {name:'projects',color:'bg-purple-400'}
]

const BentoColumns = () => {
  return (
    <div className='grid grid-cols-2 gap-2 p-2 grid-flow-row h-full'>
        {cards.map((card,index)=>(
            <div className={`${card.color} w-full h-1/6  rounded-md`}>
                <span>{card.name}</span>
            </div>
        ))}
    </div>
  )
}

export default BentoColumns