import React from "react";
import { BsCartPlus } from "react-icons/bs";

export default function CartMessage({ numberOfPeople = 6 }) {
  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-md">
      <BsCartPlus className="h-16 w-16 text-gray-700" />
      <div>
        <span className="font-medium text-gray-700">
          Other people want this.{" "}
        </span>
        <span className="text-gray-700">
          Over <span className="text-orange-500">{numberOfPeople}</span> people
          have this in their carts right now.
        </span>
      </div>
    </div>
  );
}
