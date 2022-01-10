import React from "react";

export default function Card(props) {
  return (
    <div className="flex flex-col gap-2 p-6 rounded-lg bg-white shadow-lg align-middle justify-center w-auto m-10 shadow-cyan-500">
      {props.children}
    </div>
  );
}
