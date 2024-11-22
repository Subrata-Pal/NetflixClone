import React,{useEffect} from 'react'
import '../../public/stylesheet/header.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { API_ENDPOINT } from "../utils/constants";
import toast from "react-hot-toast";
import { setUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom';
import { setLoading } from '../features/userSlice';
import { setToggle } from '../features/movieSlice';
import Search from './Search';

function Header() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store)=> store.movie.toggle);
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading)

  async function logoutHandler()
  {
    try{
    const res = await axios.get(`${API_ENDPOINT}/logout`,{
      headers : {'Content-Type': 'application/json'},
     withCredentials: true});

     console.log(res);

      if(res.data.success) 
        {
          dispatch(setUser(null));
          navigate('/');
        }
      toast.success("logged out successfully");
    }
    catch(error){
      console.log(error);
    }

  }

  function toggleHandler(){
    console.log("inside toggle handler ",);
    dispatch(setToggle(!toggle));
  }

  return (
    <div className={`${!user ? 'bg-black': ''} ${toggle ? 'bg-black':''} w-screen fixed z-10`}>
    <div className='header'>
      <img className='logo ml-6' src="../public/580b57fcd9996e24bc43c529.png" width="10%"  alt="Netflix Logo" />
      {
        user && (
          <div className='flex justify-center items-center mr-2'>
      <IoIosArrowDropdown className='w-7 h-7 mr-2'/>
      <p className='text-lg '> {user.username}</p>
      <button onClick={logoutHandler} className='logout hover:bg-red-600'>Logout</button>
      <button onClick = {toggleHandler}
      className='search hover:bg-red-600'>{toggle ? "Home" : "Search Movies"}</button>
      </div>
        )
      }
      </div>
      </div>
  )
}

export default Header