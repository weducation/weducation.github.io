"use client";

import { useState, useEffect } from "react";

interface CounterProps {
  className?: string;
}

export default function Counter({ className = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer text-stone-200 p-4 bg-stone-800 rounded-lg ${className}`}
    >
      <button className="text-center">Contador: {count}</button>
    </div>
  );
}
