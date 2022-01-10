import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-900 h-52">
      {/* ---left--- */}

      <form className="p-16">
        <label className="text-green-200">Join the Community</label>
        <div>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="outline-none text-yellow-600 px-10 rounded-l py-3 focus:ring-2 focus:ring-yellow-500 placeholder-yellow-500 placeholder-opacity-70"
          ></input>
          <button className="p-3 bg-yellow-500 rounded-r shadow ring-1 ring-yellow-500">
            Join
          </button>
        </div>
      </form>
      {/* ---Right--- */}
    </div>
  );
}
