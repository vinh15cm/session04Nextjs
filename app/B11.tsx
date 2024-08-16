"use client";
import React, { useState } from "react";

export default function B11() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const items = ["HTML", "CSS", "Javascript", "Nextjs"];

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  return (
    <div className="h-[275px]">
      <div className="relative w-72">
        <p className="font-bold text-xs">Môn học</p>
        <div className="flex items-center border rounded px-2 py-1 cursor-pointer">
          <input
            type="text"
            className="outline-none flex-grow ps-4"
            value={selectedItem}
            readOnly
          />
          <div onClick={() => setIsOpen(!isOpen)}>
            <i
              className={`fa-solid ml-2 ${
                isOpen ? "fa-caret-up" : "fa-caret-down"
              }`}
            ></i>
          </div>
        </div>
        {isOpen && (
          <div className="absolute w-full border mt-1 bg-white rounded shadow-lg z-10">
            <ul className="max-h-40 overflow-y-auto">
              {items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center px-4 py-2 hover:bg-gray-100 justify-between"
                  onClick={() => handleItemClick(item)}
                >
                  <span className="ml-2">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
