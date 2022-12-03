import Nav from "../component/Nav";
import { Search } from "@mui/icons-material";

const Items = () => {
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
        <div className="flex flex-col bg-blue-400 w-[88em] h-auto  mx-auto">
          <div className="flex flex-col mt-10 border-2 border-black py-8">
            <div className="flex mx-10 ">
              <div className="flex  border-r-2 border-black px-4 ">
                <Search className="text-xl" />
                <p className="px-3">ค้นหาไอเทม</p>
              </div>
              <div className="flex ml-16">
                <div className="w-[12rem]">
                  <p>all</p>
                </div>
                <div className="w-[12rem]">
                  <p>tool</p>
                </div>
                <div className="w-[12rem]">
                  <p>defensive</p>
                </div>
                <div className="w-[12rem]">
                  <p>proactive</p>
                </div>
                <div className="w-[12rem]">
                  <p>magic power</p>
                </div>
              </div>
            </div>
            <div className="flex mx-8 mt-4 px-10 pt-6 border-t-2 border-black ">
              <div className="flex ml-48">
                <div className="w-[12rem] flex flex-col">
                  <p>
                    <input type="checkbox" />
                    <label>utensils</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>ncome</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>control vision</label>
                  </p>
                </div>
                <div className="w-[12rem] flex flex-col">
                  <p>
                    <input type="checkbox" />
                    <label>life force</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>magic resistance</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>heal health</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>armor</label>
                  </p>
                </div>
                <div className="w-[12rem] flex flex-col">
                  <p>
                    <input type="checkbox" />
                    <label>attack power</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>critical hit</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>attack speed</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>suck blood</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>armor piercing</label>
                  </p>
                </div>
                <div className="w-[12rem] flex flex-col">
                  <p>
                    <input type="checkbox" name="" value="" />
                    <label>magic power</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>cooldown reduction</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>Mana</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>restore mana</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>Magic Penetration</label>
                  </p>
                </div>
                <div className="w-[15rem] flex flex-col">
                  <p>
                    <input type="checkbox" />
                    <label>shoe</label>
                  </p>
                  <p>
                    <input type="checkbox" />
                    <label>increase movement speed</label>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-10 gap-x-[1rem] gap-y-[1rem] text-center h-auto mt-10">
            <div className="w-[8rem] h-[12rem] border-2 border-black">1</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">2</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">3</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">4</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">5</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">6</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">7</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">8</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">9</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">10</div>
            <div className="w-[8rem] h-[12rem] border-2 border-black">11</div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#101215] w-full h-[24rem]">
        <div className="flex space-x-4  my-10 bg-white w-[78rem] mx-auto"></div>
      </div>
    </div>
  );
};

export default Items;
