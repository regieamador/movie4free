import React from "react";
import MovieCards from "./MovieCards";

export default function MovieBody({mode, filterMovies}){
    const styles = {
        backgroundColor : mode ? "#111011" : "white",
        color: mode ? "white" : "#111011"
    }

    const movieCardElements = filterMovies.map(movie => <MovieCards mode={mode} movie={movie} key={movie.id}/>)
    return(
        <div className="movieBody" style={styles}>
            <div className="row g-2 justify-content-center align-items-center">
                {movieCardElements}
            </div>
        </div>
    )
}