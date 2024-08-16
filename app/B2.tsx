import React from "react";

export default function B2() {
  return (
    <div className="h-[275px]">
      <div className="relative w-72">
        <p className="font-bold text-xs">Input Lable</p>
        <div className="flex items-center border rounded px-2 py-1 cursor-pointer">
          <i className="fa-regular fa-clock"></i>
          <input type="text" className="outline-none flex-grow ps-4" />
          <i className="fa-solid fa-caret-up ml-2"></i>
        </div>
        <div className="absolute w-full border mt-1 bg-white rounded shadow-lg z-10">
          <ul className="max-h-40 overflow-y-auto">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100  justify-between">
              <span className="ml-2">Label 1</span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100  justify-between">
              <span className="ml-2">Label 2</span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100  justify-between">
              <span className="ml-2">Label 3</span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100  justify-between">
              <span className="ml-2">Label 4</span>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
            </li>
          </ul>
          <div className="flex justify-between p-2 border-t">
            <button className="text-gray-700 px-4 py-1 rounded hover:bg-gray-300">
              Clear
            </button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
