import Nav from "../component/Nav";

const Singin = () => {
  return (
    <div>
      <Nav />
      <div className="flex bg-pink-300 w-full h-screen mt-10">
        <div className="flex flex-col bg-blue-400 w-[78rem] h-[20rem] items-center mx-auto mt-10">
          <p className="font-mono text-5xl">Sing in</p>
          <div className="bg-#f2f2f2 p-[20px] rounded">
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
              <button className="mt-6 bg-red-700 w-full border border-slate-300 rounded-md">
                <input type="submit" name="" value="Submit" className="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singin;
