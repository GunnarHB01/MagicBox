import React from "react";
import MagicBoxParent from "@/components/MagicBoxParent";

const Home = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Magic Box Page!</h1>
      <MagicBoxParent />
    </div>
  </div>
);

export default Home;
