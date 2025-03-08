import React from "react";
import { FaTimes} from "react-icons/fa";

const Modle = ({Modle, handleClick}) => {

  return (
    <div className="overlay">
        <div className="cross">
            <FaTimes   size={30} onClick={handleClick}/>
        </div>
      <div className="modle1">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae
          veniam deleniti illum fuga libero dolores et, voluptate dolorum
          voluptates.
        </h3>
      </div>
      <div className="modle2">
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae
          veniam deleniti illum fuga libero dolores et, voluptate dolorum
          voluptates.
        </h3>
      </div>
    </div>
  );
};

export default Modle;
