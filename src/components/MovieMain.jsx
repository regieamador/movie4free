import React from "react";
import _ from "lodash"

import MovieBody from "./MainBody";
import MainHeader from "./MainHeader";

export default function MovieMain({type, title, emoji, mode}){
    const [movies, setMovies] = React.useState([])
    const [filterMovies, setFilterMovies] = React.useState([])
    const [minRating, setMinRating] = React.useState(0)
    const [sort, setSort] = React.useState({})

    React.useEffect(()=>{
        fetchMovies()
    },[type])

    React.useEffect(() => { 
        if(sort.by !== "default"){
            const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order])
            setFilterMovies(sortedMovies)
        }
        else{
            const sortedMovies = _.orderBy(filterMovies, ['original_title'], [sort.order]);
            setFilterMovies(sortedMovies);
        }
    }, [sort])

    const fetchMovies = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=8a0842f9bf36d5f5310d015900cb3a84`)
        const data = await res.json()
        setMovies(data.results)
        setFilterMovies(data.results)
    }

    const handleFilter = (rating) => {
        if(minRating == rating){
            setMinRating(0)
            setFilterMovies(movies)
        }
        else{
            setMinRating(rating)
            const filtered = movies.filter(movie => movie.vote_average >= rating)
            setFilterMovies(filtered)
        }
    }

    return(
        <div className="movieMain">
            <MainHeader mode={mode} type={type} title={title} emoji={emoji} handleFilter={handleFilter} rating={minRating} ratingList={[8,7,6]} setSort={setSort}/>
            <MovieBody mode={mode} filterMovies={filterMovies}/>
        </div>
    )
}