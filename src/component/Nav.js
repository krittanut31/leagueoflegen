import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex h-16 w-full justify-center bg-black">
      <div className="flex bg-white  w-[78rem] h-auto ">
        <div className="grid grid-cols-8 text-center content-center h-auto">
          <Link className="hover:bg-gray-500">
            <div>
              <img src="https://cdngarenanow-a.akamaihd.net/webth/lol/LoLWebsite/img/logo.png"></img>
            </div>
          </Link>
          <Link to="/" className="hover:bg-gray-500 ">
            Home
          </Link>
          <Link to="/news" className=" ">
            News
          </Link>
          <Link to="/champions" className="">
            Champions
          </Link>
          <Link to="/items" className="">
            Items
          </Link>
          <Link to="/download" className="">
            Download
          </Link>

          <Link to="/singin" className="">
            Login
          </Link>
          <Link to="/topup" className="">
            เติมเงิน
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
