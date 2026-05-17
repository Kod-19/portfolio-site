import React from 'react'

const Cards = ({title, desc}) => {
  return (
    <div className='py-5 px-4 rounded-md bg-(--card-bg) border-l-4 border-(--tertiary-color) hover:translate-y-1 hover:border-sky-200 transition-all duration-300'>
        <p className='text-xl text-(--title-color) font-bold py-4 px-4 w-2/3'>{title}</p>
        <p className='text-lg font-medium text-(--text-color) py-4 px-4'>{desc}</p>
    </div>
  )
}

export default Cards