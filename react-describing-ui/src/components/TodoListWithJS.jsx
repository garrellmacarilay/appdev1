import React from 'react'

function TodoListWithJS() {
   const person = {
    name: 'Gregorio Y. Zara',
    theme: {
      backgroundColor: '#1f2937',
      color: '#f9a8d4'
    }
  };
  return (
    <>
      <div style={person.theme} className="rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold mb-3">{person.name}'s Todos</h1>
      <img
        className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 mx-auto block border-4"
        style={{ borderColor: person.theme.color }}
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul className="list-disc list-inside space-y-2 text-sm sm:text-base">
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    
    
    </>
  )
}

export default TodoListWithJS