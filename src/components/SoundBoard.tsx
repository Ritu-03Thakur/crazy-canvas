import { useState } from "react";
import { BoardData } from "../data";
import { Link } from "react-router-dom";

function SoundBoard() {
  const [char, setChar] = useState(BoardData[0]);
  const [audio] = useState(new Audio(char.sound));

  const handlePlay = () => {
    audio.src = char.sound;
    audio.play();
  };

  return (
    <>
    <div className="flex p-4 flex-col items-center m-auto">

    <Link to= {"/"}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium  rounded-lg text-white linear ">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
          Back
        </span>
      </button>
    </Link>

      <div className="flex m-auto gap-8 flex-wrap p-8">
        {BoardData.map((e) => {
          const { id, img } = e;
          return (
            <div
            className= "flex flex-col justify-center items-center p-1  boxshadow  bg-col-o rounded-lg shadow hover:opacity-50 "
            key={id}
            onClick={() => setChar(e)}
            >
              <img
                className=" rounded-t-lg w-52 h-48  "
                src={img}
                alt="card image"
              />
            </div>
          );
        })}
      </div>
      {
        <div className="flex flex-col m-auto gap-2">
          <div className="flex gap-1 m-auto items-baseline">
          <div className="p-2">  
            <h5 className=" text-xl uppercase   font-semibold tracking-tight text-col-b ">CARTOON NAME --</h5> 
       
    </div>
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium  rounded-lg text-white linear ">
    <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                {char.cartoonName}
              </span>
            </button>
          </div>
         
          <div className="flex gap-1 m-auto items-baseline flex-wrap">
          <div className="p-2">  
            <h5 className=" text-xl uppercase   font-semibold tracking-tight text-col-b ">MAIN CHARACTERS --</h5> 
       
    </div>
            {char.charName.map((element, index) => (
              <button
               className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium  rounded-lg text-white linear "
                key={index}
              >
               <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                  {element}
                </span>
              </button>
            ))}
          </div>
         
          <div className="flex gap-1 m-auto items-baseline">
          <div className="p-2">  
            <h5 className=" text-xl uppercase   font-semibold tracking-tight text-col-b ">TITLE SONG --</h5> 
       
    </div>
            <button
             className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium  rounded-lg text-white linear "
              onClick={handlePlay}
              value={char.sound}
            >
             <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                {char.cartoonName} SOUND
              </span>
            </button>
          </div>
        </div>
      }
    </div>
    </>
  );
}

export default SoundBoard;
