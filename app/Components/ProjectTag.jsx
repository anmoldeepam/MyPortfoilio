import React from 'react'

const ProjectTag = ({name,onClick,isSelected}) => {
    const buttonStyle = isSelected
    ? "text-white border-purple-500"
    : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button onClick={() => onClick(name)} className={`${buttonStyle} px-6 py-3 text-xl border-2 rounded-full`}>
        {name}</button>
       
  )
}

export default ProjectTag