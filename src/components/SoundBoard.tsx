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
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Back
        </span>
      </button>
    </Link>

      <div className="flex m-auto gap-8 flex-wrap p-8">
        {BoardData.map((e) => {
          const { id, img } = e;
          return (
            <div
              className=" w-52 h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
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
        <div className="flex ">
          <div className="">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                {char.cartoonName}
              </span>
            </button>
          </div>
          <div className="">
            {char.charName.map((element, index) => (
              <button
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
                key={index}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  {element}
                </span>
              </button>
            ))}
          </div>
          <div className="">
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
              onClick={handlePlay}
              value={char.sound}
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
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
