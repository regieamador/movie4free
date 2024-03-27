import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=8a0842f9bf36d5f5310d015900cb3a84`)
  .then(res => res.json())
  .then(data => setMovie(data))

  }, [id])

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='movie'>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='img-fluid moviePoster'/>
      <div className='movieInformations'>
        <h1 className="title">{movie.original_title}</h1>
        <p className="description">{movie.overview}</p>
        <p className="release">{movie.release_date}</p>
        <p className="votes">8.8<i className='bx bxs-star' ></i></p>
        <a href={movie.homepage} target="_blank"><button className='watchBtn btn btn-primary btn-md'>Watch Now</button></a>
      </div>
      <div className='closeBtn'>
        <i class='bx bx-x' onClick={handleBack}></i>
      </div>
    </div>
  )
}

export default Movie
