import  { useEffect, useState } from "react";
import axios from 'axios';
import {Link} from "react-router-dom" ; 

const DadJoke = () => {
  const [joke, setJoke] = useState("");

  async function getRandomDadJoke() {
    try {
      const response = await axios.get('https://icanhazdadjoke.com/', {
        headers: { 'Accept': 'application/json' },
      });

      if (response.data && response.data.joke) {
        setJoke(response.data.joke);
      } else {
        throw new Error('Unable to fetch dad joke');
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      console.error('Error:', error.message);
    }
  }

  useEffect(() => {
    getRandomDadJoke();
  }, []); 

  const nextJoke = () => {
    getRandomDadJoke();
  };

  return (
    <>
    <Link to= {"/"}>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium  rounded-lg text-white linear ">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
          Back
        </span>
      </button>
    </Link>
    <div className="flex justify-center items-center flex-col gap-5">
      <h2 className="text-xl uppercase font-semibold tracking-tight text-col-b mt-4">DAD JOKES</h2>
      <div className="flex gap-2 flex-col m-2">
        <div className="max-w-[400px] h-[300px] bg-slate-400 text-amber-600 shadow rounded-lg ">
          <h5 className="text-xl uppercase font-semibold tracking-tight text-col-b flex justify-center p-4">{joke}</h5>
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium rounded-lg text-white linear">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0" onClick={nextJoke}>
            Next Joke
          </span>
        </button>
      </div>
    </div>
    </>
  );
}

export default DadJoke;
