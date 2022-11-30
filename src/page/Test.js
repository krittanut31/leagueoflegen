import React, { useState } from "react";

const Test = () => {
  const [isShown, setIsShown] = useState(false);

  const changeBackground = (e) => {
    e.target.style.background = "red";
  };
  return (
    <div className="bg-black w-full h-14 ">
      <div>
        <p className="text-white">Test</p>
      </div>
      <div>
        {/** 
          onClick={() => setIsShown(true)}*/}
        <button
          className="text-white "
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          onMouseOver={changeBackground}
        >
          เกี่ยวกับเกม
        </button>
        {isShown && (
          <div
            className="border-2 border-red-700 "
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onMouseOver={changeBackground}
          >
            <button>
              {isShown && <p>I'll appear when you hover over the button.</p>}
            </button>
          </div>
        )}
      </div>
      <div className="App">
        <button onMouseOver={changeBackground}>Hover over me!</button>
      </div>
    </div>
  );
};

export default Test;
