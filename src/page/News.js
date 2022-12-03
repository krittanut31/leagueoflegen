import Nav from "../component/Nav";

const News = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col bg-pink-300 w-full h-auto ">
        <div className="flex bg-[url('https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/blurred1.jpg')] bg-repeat-x w-full h-[16rem]">
          <div className="flex flex-col w-[78rem]  bg-red-200 mx-auto">
            <div className="my-12 h-full">
              <div className="h-full bg-orange-400">content</div>
            </div>
          </div>
        </div>
        <div className="flex bg-white w-full h-[16rem]">
          <div className="flex w-[78rem] bg-lime-400 mx-auto">
            <div className="flex space-x-16  my-10 bg-white w-[78rem] mx-auto">
              <div className="w-[24rem] border-black border-2">content1</div>
              <div className="w-[24rem] border-black border-2">content2</div>
              <div className="w-[24rem] border-black border-2">content3</div>
            </div>
          </div>
        </div>
        <div className="flex bg-blue-300 w-full h-auto">
          <div className="flex "></div>
          <div className="flex w-[78rem] mx-auto">
            <div className="flex flex-col w-[70%] bg-green-400 h-[78rem] ml-auto"></div>
            <div className="flex w-[30%] h-[30rem] bg-violet-600 border-l-2 border-black  mr-auto"></div>
          </div>
        </div>
        <div className="flex bg-[#101215] w-full h-[24rem]">
          <div className="flex space-x-4  my-10 bg-white w-[78rem] mx-auto"></div>
        </div>
      </div>
    </div>
  );
};
export default News;
