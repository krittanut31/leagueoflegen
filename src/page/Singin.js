import Nav from "../component/Nav";
import { Link } from "react-router-dom";

const Singin = () => {
  return (
    <div>
      <Nav />
      <div className="flex bg-pink-300 w-full h-screen mt-10">
        <div className="flex flex-col bg-blue-400 w-[78rem] h-[20rem] items-center mx-auto mt-10">
          <p className="font-mono text-5xl">Sing in</p>
          <div className="grid justify-items-center bg-f2f2f2 p-[20px] rounded ">
            <form className="w-[18rem]">
              <input
                type="text"
                name="id"
                className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Usename or email"
              />
              <input
                type="text"
                name="password"
                className=" placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-5 pr-3 mt-6  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Password"
              />
              <div>
                <button className="mt-6 bg-red-700 w-full border border-slate-300 rounded-md">
                  <input
                    type="button"
                    name="Sing in"
                    value={"Sing in"}
                    className="text-white"
                  />
                </button>
              </div>
            </form>
            <div className="flex mt-8 w-[16rem] justify-center text-center border-t-2 border-black ">
              <p className="-mt-4 bg-white z-10 w-10">or</p>
            </div>
            <form>
              <div>
                <button className="mt-4 bg-red-500 w-[18rem] border border-slate-300 rounded-md">
                  <Link to="/register">
                    <p className="text-white">Register a new account</p>
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
