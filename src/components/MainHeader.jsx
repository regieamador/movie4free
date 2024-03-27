import FilterLinks from "./FilterLinks";
import React from "react";

export default function MainHeader({handleFilter, rating, ratingList ,setSort, title, emoji, type, mode}){
    const [sortBy, setSortBy] = React.useState({
        by : "default",
        order : "asc"
    })

    const handleSort = (e) => {
        const {name, value} = e.target
        setSortBy(prev => ({...prev, [name] : value}))
        setSort(sortBy)
    }

    const styles = {
        backgroundColor : mode ? "#111011" : "white",
        color: mode ? "white" : "#111011"
    }

    return(
        <div style={styles}>
            <div className="forMargin"  id={type}>

            </div>

            <div className={`mainHeader ${mode ? "border-bottom border-white border-1":"border-bottom border-black border-1"}`}>
                <div className="mainHeaderBrand d-flex align-items-center">
                    <h4 className="mainNavTitle">{title}</h4>
                    <i className={`navIcons bx ${emoji}`} ></i>
                </div>

                <div className="d-flex mainHeaderLinks">
                    <ul className="ratingLinks">
                        {
                            ratingList.map((rate, index) => <FilterLinks handleFilter={handleFilter} rating={rating} rate={rate} key={index}/>)
                        }
                    </ul>
                    
                    <select name="by" className="sort" onChange={handleSort}>
                        <option value="default">Sort By</option>
                        <option value="release_date">Date</option>
                        <option value="vote_average">Rating</option>
                    </select>

                    <select name="order" className="sort" onChange={handleSort}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>
        </div>
    )
}