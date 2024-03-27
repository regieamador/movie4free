import React from 'react'
import {Routes, Route} from "react-router-dom";

import MovieMain from './components/MovieMain';
import Movie from './components/Movie';

const AllRoute = ({mode}) => {
  return (
    <Routes>
        <Route path="/" element={<MovieMain type="popular" title="Popular" emoji="bxs-hot" mode={mode} />}/>
        <Route path="/top_rated" element={<MovieMain type="top_rated" title="Top Rated" emoji="bxs-star" mode={mode} />}/>
        <Route path="/upcoming" element={<MovieMain type="upcoming" title="Upcoming" emoji="bxs-alarm-exclamation" mode={mode} />}/>
        <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  )
}

export default AllRoute
