import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constant'
import { cacheResults } from '../utils/searchSlice'



const Head = () => {

  const [searchQuery, setSearchQuery] = useState("") //input value

  const [suggestions, setSuggestions] = useState([]) //results we are getting after input

  const [showSuggestion, setShowSuggestion] = useState(false) //onFocus input and onBlur input


  const searchCache = useSelector(store => store.search)
 

  useEffect(() => {

    const timer = setTimeout(() => {

      if (searchCache[searchQuery]) {

        setSuggestions(searchCache[searchQuery])

      } else {

        getSearchSuggestion()

      }

    }, 200);

    return () => {
      clearTimeout(timer)
    }

  }, [searchQuery])


  const getSearchSuggestion = async () => {

    // console.log("API calling")

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()

    setSuggestions(json[1])

    //update cache store redux
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))

  }


  const dispatch = useDispatch()

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }



  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>

      <div className='flex col-span-1'>

        <img
          onClick={() => toggleMenuHandler()}
          className='h-8 cursor-pointer'
          alt='menu' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3WH3C_hXNmb-Lb9lDwUbvyZkZ2GMNCQ7Guw&usqp=CAU' />

        <a href='/' >
          <img
            className='h-8 mx-2 '
            alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROC-3-1UFI7qAl8BiicDWaknbvoirGhMkxcw&usqp=CAU' />
        </a>

      </div>

      <div className='col-span-10 px-10'>
        <div>

          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}


            className='w-1/2 border border-gray-400 p-2 px-5 rounded-l-full'
            type="text" />
          <button className='border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100'>Search</button>

        </div>
        {showSuggestion && <div className='fixed bg-white py-2 px-2 w-[32rem] shadow-lg border border-gray-100 rounded-lg'>

          <ul>
            {suggestions.map((s) => (

              <li key={s} className='shadow-sm py-2 px-3 m-1 hover:bg-gray-100'>🔍 {s}</li>
            ))}
          </ul>

        </div>}

      </div>

      <div className='col-span-1'>
        <img
          className='h-8'
          alt='user-icon' src='https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg' />
      </div>

    </div>
  )
}

export default Head
