"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const popNumber = () => {
    console.log("POPPING");
    numbers.pop();
    console.log(numbers);
    setNumbers([...numbers]);
  };

  useEffect(() => {
    popNumber();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <div>
        {numbers.map((number, index) => (
          <p key={index}>{number}</p>
        ))}
        <button
          onClick={popNumber}
          className="w-[300px] h-[100px] bg-gray-600 text-white text-[50px] rounded-lg mt-20 hover:bg-slate-400 transition-all"
        >
          POP
        </button>
      </div>
    </div>
  );
};
export default Page;
