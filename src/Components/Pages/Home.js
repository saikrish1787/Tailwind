import React from "react";

export const Home = () => {
  return (
    <>
      <div className=" h-screen w-full flex align-middle justify-center gap-40 py-52 bg-gray-800 m-0">
        <div className=" w-80 h-80 flex flex-col justify-center gap-4">
          <p className=" text-lg text-opacity-30">Best in the town</p>
          <h1 className=" text-4xl">
            TRY A <span className="text-4xl text-rose-600">BETTER</span> &
            <span className="text-4xl text-rose-600">FASTER</span>
            EATING EXPERINCE
          </h1>
          <div>
            <button className="px-8 py-2 bg-cyan-600 shadow-lg hover:bg-cyan-700 rounded text-slate-100 mr-4">
              Learn More
            </button>
            <button className="px-8 py-2 bg-rose-600 shadow-lg hover:bg-rose-700 rounded text-slate-100">
              Order Now
            </button>
          </div>
        </div>
        <div>
          <img
            alt="food"
            className="rounded-lg shadow-lg"
            src="https://media.istockphoto.com/photos/delicious-homemade-hamburger-and-french-fries-picture-id1254672762?b=1&k=20&m=1254672762&s=170667a&w=0&h=nKrG40G2jj9O8wzJ8wDD2zmUKNp00mcdVWK_f_zixug="
          />
        </div>
      </div>
    </>
  );
};
