import React from 'react'

function TreeDiagram() {
  return (
    <>
        <div className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">UI Tree Structure</h2>
        <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
            <div className="text-blue-600 font-bold whitespace-nowrap">Root Component</div>
                <div className="ml-3 sm:ml-4 mt-1 space-y-1">
                <div className="text-purple-600 whitespace-nowrap">├── Component A</div>
                <div className="text-purple-600 ml-6 sm:ml-8 whitespace-nowrap">│   └── Component B</div>
                <div className="text-purple-600 whitespace-nowrap">├── Component C</div>
                <div className="text-purple-600 ml-6 sm:ml-8 whitespace-nowrap">    └── Component D</div>
            </div>

            <div className="text-blue-600 font-bold whitespace-nowrap">Root Module</div>
                <div className="ml-3 sm:ml-4 mt-1 space-y-1">
                <div className="text-purple-600 whitespace-nowrap">├── Module A</div>
                <div className="text-purple-600 whitespace-nowrap">├── Module B</div>
                <div className="text-purple-600 whitespace-nowrap">├── Module C</div>
                <div className="text-purple-600 ml-6 sm:ml-8 whitespace-nowrap">    └── Module D</div>
            </div>
        </div>
        </div>
    </>
  )
}

export default TreeDiagram