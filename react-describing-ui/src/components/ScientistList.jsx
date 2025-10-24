import React from 'react'
import { getImageUrl } from '../utils/utils.js'
import {people} from '../data.js'

function ScientistList() {
  const listItems = people.map(person =>
    <li key={person.id} className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3 border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
        <img
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-blue-300 shrink-0"
          src={getImageUrl(person)}
          alt={person.name}
        />
        <div className="text-center sm:text-left">
          <p className="text-sm sm:text-base">
            <b className="text-gray-800">{person.name}:</b>
            <span className="text-gray-600"> {person.profession} </span>
            <span className="text-gray-500 text-xs sm:text-sm">known for {person.accomplishment}</span>
          </p>
        </div>
      </div>
    </li>
  );
  
  return (
    <article className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default ScientistList