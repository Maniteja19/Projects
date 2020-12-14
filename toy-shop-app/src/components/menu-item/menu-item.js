import React from "react"
import "./menu-item.css"
import {withRouter} from "react-router-dom"

const MenuItem = ({size,imageURL,title,history,match,linkUrl}) =>{
    return(
        <div  className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)} >
        <div className = "background-image" 
        style={{
            backgroundImage: `url(${imageURL})`
        }} />
            <div class="content">
                <h1 className="title">{title}</h1>
                <span clasName="subtitle">Buy Now</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)