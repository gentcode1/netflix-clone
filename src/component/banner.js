import React, { useState, useEffect } from "react";
import axios from "../Services/axios";
import Request from "../Services/request";
import './banner.css'
const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Request.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length> n ? str.substr(0, n-1) + "...." : str;
  }

  return (
  <header className='banner'
      style={{
      backgroundSize:"cover",
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition:"center center",
  }}>
 <div className='banner__container'>
 <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
 <div>
   <button className='banner__button'>Play</button>
   <button className='banner__button'>My List</button>  
 </div>
 <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
 </div>
 <div className='banner__fadeBottom'></div>
  </header>
  )
};
export default Banner;
