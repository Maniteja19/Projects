import React from "react"
import "./menu-item.css"

const MenuItem = (props) =>{
    return(
        <div  className={`${props.size} menu-item`}>
        <div className = "background-image" 
        style={{
            backgroundImage: `url(${props.imageURL})`
        }}/>
            <div class="content">
                <h1 className="title">{props.title}</h1>
                <span clasName="subtitle">Buy Now</span>
            </div>
        </div>
    )
}

export default MenuItem