import Nav from "../component/Nav";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Character from "./Character";

const Champions = () => {
  return (
    <div>
      <Nav />
      <div className=" bg-pink-300 w-full h-[50rem] ">
        <div className="flex flex-col justify-center  bg-blue-400 pt-5 w-[84rem]  h-screen mx-auto p-auto">
          <p className="flex justify-center  bg-white h-fit  ">
            ค้นหาสไตล์การเล่นที่ใช่จากแชมเปี้ยนกว่า 140 ตัว!
          </p>
          <div className="flex bg-white w-full h-screen mt-8 justify-center">
            <div className="grid grid-cols-1 gap-[0.6rem]  ">
              <div className="w-[80rem] h-[24rem] border-2 border-black">
                <Link to="/champions/character">Character</Link>
                <Routes>
                  <Route />
                  <Route path="character" element={<Character />} />
                </Routes>
              </div>
              <div className="w-[16rem] h-[24rem] border-2 border-black">2</div>
              <div className="w-[16rem] h-[24rem] border-2 border-black">3</div>
              <div className="w-[16rem] h-[24rem] border-2 border-black">4</div>
              <div className="w-[16rem] h-[24rem] border-2 border-black">5</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Champions;
