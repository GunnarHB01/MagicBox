import React, { useRef, forwardRef, useImperativeHandle } from "react";

const tailwindColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
];

type MagicBoxHandle = {
  changeColor: () => void;
  resize: () => void;
  wiggle: () => void;
};

const MagicBox = forwardRef<MagicBoxHandle>((_, ref) => {
  const boxRef = useRef<HTMLDivElement>(null);

  function randomColor() {
    const colorIndex = Math.floor(Math.random() * tailwindColors.length);
    return tailwindColors[colorIndex];
  }

  const changeColor = () => {
    if (boxRef.current) {
      boxRef.current.className = `w-20 h-20 ${randomColor()} transition-all duration-300`;
    }
  };

  const resize = () => {
    if (boxRef.current) {
      boxRef.current.style.width = `${Math.floor(Math.random() * 50 + 50)}px`;
      boxRef.current.style.height = `${Math.floor(Math.random() * 50 + 50)}px`;
    }
  };

  const wiggle = () => {
    if (boxRef.current) {
      boxRef.current.classList.add("animate-wiggle");
      setTimeout(() => boxRef.current?.classList.remove("animate-wiggle"), 500);
    }
  };

  useImperativeHandle(ref, () => ({
    changeColor,
    resize,
    wiggle,
  }));

  return (
    <div
      ref={boxRef}
      className="w-20 h-20 bg-teal-500 rounded-md shadow-lg transition-all duration-300"
    />
  );
});

MagicBox.displayName = "MagicBox";
export default MagicBox;
