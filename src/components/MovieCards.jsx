import { Link } from "react-router-dom"

export default function MovieCards({movie, mode}){

    const styles = {
        backgroundColor : mode ? "#111011" : "white",
        color: mode ? "white" : "#111011"
    }

    return(
            <div className="card cardPoster g-4 mb-5 col-md-2" style={styles}>
                <Link to={`/movie/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="poster img-fluid"/>

                    <div className="movieInfo">
                        <div className="sad">
                            <h5 className="movieTitle">{movie.original_title}</h5>
                            <div className="d-flex justify-content-between">
                                <p className="textt">{movie.release_date}</p>
                                <p className="textt">{movie.vote_average} <span><i className='navIcons bx bxs-star' ></i></span></p>
                            </div>
                            <p className="textt">{movie.overview.slice(0,100) + "..."}</p>
                        </div>
                    </div>
                </Link>
            </div>
    )
}