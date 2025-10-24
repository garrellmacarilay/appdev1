import React from 'react'

function Cup({ guest }) {
  return <h2 className="text-base sm:text-lg text-gray-700 mb-2">Tea cup for guest #{guest}</h2>;
}

function TeaSet() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Pure Component: Tea Set</h2>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
      <p className="text-xs sm:text-sm text-green-600 mt-4 italic">✓ This is a pure component - same props always produce the same output</p>
    </div>
  );
}
export default TeaSet
