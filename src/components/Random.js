import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY // from .env file
const Random = () => {

  const { gif, loading, fetchData } = useGif(); // useGif state se gif, loading, .. le liya

  function clickHandler() {
    fetchData();  // for generating random meme
  }

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} width="450" />)
      }
      <button onClick={clickHandler}
        className='w-10/12 bg-white text-lg py-1 rounded-lg mb-[20px]'
      >Generate</button>

    </div>
  )
}

export default Random 