import React, { useRef } from "react";
import MagicBox from "./MagicBox";

type MagicBoxHandle = {
  changeColor: () => void;
  resize: () => void;
  wiggle: () => void;
};

function MagicBoxParent() {
  const magicBoxRef = useRef<MagicBoxHandle>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-2xl font-bold text-white">Magic Box!</h1>
      <div className="flex gap-2">
        <button
          onClick={() => magicBoxRef.current?.changeColor()}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
        >
          Change Color
        </button>
        <button
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
          onClick={() => magicBoxRef.current?.resize()}
        >
          Resize
        </button>
        <button
          className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none"
          onClick={() => magicBoxRef.current?.wiggle()}
        >
          Wiggle
        </button>
      </div>
      <MagicBox ref={magicBoxRef} />
    </div>
  );
}

export default MagicBoxParent;
