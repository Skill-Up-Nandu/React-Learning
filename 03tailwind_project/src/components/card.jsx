import React from 'react'

function Card({ title, desc, btnText='Click Me'}) {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-red-400 mb-2 mt-4"  >

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-black">{title}</h2>
        <p className="text-black-600 mb-4">{desc}</p>

        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-pink-700">
          {btnText}
        </button>
      </div>
    </div>
  );
}


export default Card