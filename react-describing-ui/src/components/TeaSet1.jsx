import React from 'react'
let guest = 0
function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2 className="text-base sm:text-lg text-gray-700 mb-2">Tea cup for guest #{guest}</h2>;
}

function TeaSet1() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Not a Pure Component: Tea Set</h2>
      <Cup />
      <Cup />
      <Cup />
      <p className="text-xs sm:text-sm text-green-600 mt-4 italic">✗ This is not a pure component — the same props may produce different outputs</p>
    </div>
  );
}

export default TeaSet1