import Nav from "../component/Nav";

const Topup = () => {
  return (
    <div>
      <Nav />
      <div className="flex bg-pink-300 w-full h-screen ">
        <div className="flex bg-[url('https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/img/blurred1.jpg')] bg-repeat-x w-full h-[16rem]">
          <div className="flex flex-col w-[78rem]  bg-red-200 mx-auto">
            <div className="my-12 h-full">
              <div className="h-full bg-orange-400">content</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topup;
