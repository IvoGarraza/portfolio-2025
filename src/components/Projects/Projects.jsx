import React from 'react'

const projects = [
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},
    {name:'proyecto',props:''},         
]

const Projects = () => {
  return (
    <div className='w-full rounded-md h-full grid grid-flow-row gap-2 p-2'>
        {projects.map((proyect, index)=>(
            <div className='w-full h-[24px] bg-purple-400 rounded-md '>{proyect.name}</div>
        ))}
    </div>
  )
}

export default Projects