import React from 'react'
import Profile from './Profile'

function Gallery() {
  return (
    <section className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Amazing scientists</h1>
      <div className="flex gap-4 justify-center flex-wrap">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  )
}

export default Gallery