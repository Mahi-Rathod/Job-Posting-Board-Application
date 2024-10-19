import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { useState } from 'react';
const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create-interview")
  }
  return (
    <div className="container w-full flex pt-5 gap-2">
      <div className='w-[8%] h-[85vh] flex flex-col items-center border-r-2 border-black'>
        <div>
          <Link to="/home">
            <FaHome className='text-3xl' />
          </Link>
        </div>
      </div>
      <div className='view-section w-[90%]'>
        <button
          className="create-button w-[13%] px-3 h-[2.5rem] rounded-md bg-blue-700 text-white font-bold"
          onClick={handleClick}
        >
          Create Interview
        </button>
      </div>
    </div>

  );
};

export default Home;
