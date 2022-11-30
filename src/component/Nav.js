import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="flex h-16 w-full justify-center bg-black">
      <div className="flex bg-white justify-center  w-[78rem] h-10 ">
        <div className="flex space-x-4 items-center ">
          <Link to="/" className=" ">
            Home
          </Link>
          <Link to="/news" className=" ">
            News
          </Link>
          <div>
            <button
              onMouseEnter={() => setIsShown(true)}
              onMouseLeave={() => setIsShown(false)}
            >
              เกี่ยวกับเกม
            </button>
            {isShown && (
              <div>
                <Link to="/" className=" ">
                  Home
                </Link>
              </div>
            )}
          </div>
          <Link to="/champions" className="">
            Champions
          </Link>
          <Link to="/items" className="">
            Items
          </Link>
          <Link to="/tutorial" className="">
            Tutorial
          </Link>
          <Link to="/help" className="">
            Help
          </Link>
          <Link to="/topup" className="">
            เติมเงิน
          </Link>
          <Link Link to="/test" className="">
            Test
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
