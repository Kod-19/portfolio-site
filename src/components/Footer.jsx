import React from 'react'

const Footer = () => {
  return (
    <div className='bg-(--card-bg) p-5 py-8 text-center text-gray-700'>
      <p>© {new Date().getFullYear()} Kwame Dawson </p>
    </div>
  )
}

export default Footer