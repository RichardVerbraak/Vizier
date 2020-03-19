import React from 'react'
import Filter from './Filter'

// Regex to remove underscore
const Category = ({title, media, filter}) => {
    return (
        <div className="category">
            <div className="category__heading">
                <h2 className="category__heading--main">{title.replace(/_/g, " ")}</h2>
                <h3 className="category__heading--sub">{media}</h3>
                {filter &&
                    <Filter media={media} />
                }                    
            </div>
        </div>
    )    
}

export default Category