import React from 'react'

function TodoList() {
  return (
    <>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Hedy Lamarr's Todos</h1>
        <img
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg object-cover mb-4 mx-auto block"
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
        />
        <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve spectrum technology</li>
        </ul>
        </div>
    </>
  )
}

export default TodoList