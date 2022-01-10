import React from "react";
import Card from "./Card";
import { useState } from "react";

export const CardSummary = () => {
  const [isShow, setisShow] = useState(false);

  const clickHandler = (e) => {
    setisShow(true);
  };

  const lessHandler = () => {
    setisShow(false);
  };

  return (
    <Card>
      <img
        src="https://images.unsplash.com/photo-1635903693883-a182cb177e04?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
        className="rounded h-60"
        alt="cycle"
      />
      <h1>This is an Image</h1>
      {!isShow && (
        <button
          onClick={clickHandler}
          className="px-8 py-2 rounded hover:bg-violet-600 bg-violet-400"
        >
          Read More
        </button>
      )}
      {isShow && (
        <p>
          This is the See More paragraph, <br />A paragraph is a series of
          sentences
          <br /> that are organized and coherent, and are all related
          <br /> to a single topic. Almost every piece of writing you do <br />{" "}
          is longer than a few sentences should be <br />
          organized into paragraphs. ... One of the most important
          <br /> of these is a topic sentence.{" "}
          <a className="text-cyan-400" onClick={lessHandler}>
            See Less
          </a>
        </p>
      )}
    </Card>
  );
};
