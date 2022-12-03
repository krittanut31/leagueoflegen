import Nav from "../component/Nav";
import { Visibility } from "@mui/icons-material";

const Download = () => {
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
        <div className="flex w-full h-auto">
          <div className="flex flex-col w-[78rem] h-[20rem] bg-white mx-auto">
            <div className="flex">
              <Visibility className="mt-2" />
              <p className="text-3xl ml-3">current patch</p>
            </div>
            <div className="flex flex-col border border-black py-10">
              <div className="flex mx-10  border-b border-black ">
                <p className="mb-5">
                  If you encounter an error during the update You may try manual
                  patch update.
                </p>
              </div>
              <div className="flex mx-10 mt-5">
                <p className="text-2xl font-bold">
                  Manual Patch 12.22 Hotfix#2 [18 Nov]
                </p>
              </div>
              <div className="flex mx-10 mt-5">
                <button className="bg-[#7a0a0a] rounded-md">
                  <p className="text-white p-5 ">Download</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex bg-[#101215] w-full h-[24rem]">
          <div className="flex space-x-4  my-10 bg-white w-[78rem] mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Download;
