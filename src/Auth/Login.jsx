import React from "react";

const Login = () => {
  return (
    <section className="flex items-center justify-center h-screen w-full flex-col gap-5 p-5">
      <div className="shadow-[0_0_5px_rgb(50,50,50)] flex flex-col gap-14 p-5 w-80 h-96 rounded-md">
        <h1 className="text-center text-2xl font-bold">Login</h1>
        <form className="flex flex-col gap-10">
          <input
            className="w-full p-2 shadow-[0_0_2px_rgb(50,50,50)] rounded-md outline-none"
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full p-2 shadow-[0_0_2px_rgb(50,50,50)] rounded-md outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="w-full bg-gray-500 p-2 rounded-md hover:bg-gray-700 duration-300 hover:text-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
