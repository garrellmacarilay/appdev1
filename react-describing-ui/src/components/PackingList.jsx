import React from 'react'

function Item({ name, isPacked }) {
  return (
    <li className="text-sm sm:text-base text-gray-700 py-1">
      {name} {isPacked && '✅'}
    </li>
  );
}
function PackingList() {
  return (
    <section className="bg-white border-2 border-gray-200 rounded-lg p-4 sm:p-6 mb-4 shadow-md">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Sally Ride's Packing List</h1>
      <ul className="space-y-1">
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  )
}

export default PackingList