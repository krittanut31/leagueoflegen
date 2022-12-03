import Nav from "../component/Nav";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <div className="flex flex-col w-full h-auto  ">
        <div className="flex bg-[url('https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/blurred1.jpg')] bg-repeat-x w-full h-[32.5rem]">
          <div className="flex flex-col w-[78rem]  bg-white mx-auto">
            <div className="my-10 h-full">
              <div className="h-[90%] bg-orange-400">content</div>
              <div className="h-[10%] bg-yellow-500">footer</div>
            </div>
          </div>
        </div>
        <div className="flex w-full h-[64rem] bg-pink-300">
          <div className="flex flex-col w-[78rem]  bg-yellow-300 mx-auto"></div>
        </div>
        <div className="flex bg-[#101215] w-full h-[24rem] ">
          <div className="flex space-x-4  my-10 bg-white w-[78rem] mx-auto"></div>
        </div>
      </div>
    </div>
  );
};
export default Home;
