import Nav from "../component/Nav";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const Champions = () => {
  return (
    <div>
      <Nav />
      <div className="flex bg-pink-300 w-full h-screen ">
        <div className="flex flex-col justify-center  bg-blue-400 pt-5 w-[84rem]  h-screen mx-auto ">
          <p className="flex justify-center  bg-white h-fit  ">
            ค้นหาสไตล์การเล่นที่ใช่จากแชมเปี้ยนกว่า 140 ตัว!
          </p>
          <div className="flex  bg-white w-full h-screen mt-8 ">
            <div className="grid grid-col-5 gap-x-[0.6rem] ">
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="">
                  <img
                    src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Aatrox_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Aatrox</p>
                </div>
              </Link>
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="">
                  <img
                    src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Ahri_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Ahri</p>
                </div>
              </Link>
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Akali_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Akari</p>
                </div>
              </Link>
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Akshan_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Akshan</p>
                </div>
              </Link>
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Alistar_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Alistar</p>
                </div>
              </Link>
              <Link
                to="character"
                className="w-[16rem] h-fit border-2 border-black"
              >
                <div className="flex flex-col items-center">
                  <img
                    src="	https://cdngarenanow-a.akamaihd.net/games/lol/2020/LOLwebsite/champion/Amumu_0.jpg"
                    alt=""
                    className="w-full h-auto"
                  />
                  <p className="">Amumu</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
