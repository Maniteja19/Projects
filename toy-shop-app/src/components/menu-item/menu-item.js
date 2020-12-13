import React from "react"
import "./menu-item.css"

const MenuItem = (props) =>{
    return(
        <div style={{
            backgroundImage: `url(${props.imageURL})`
        }} className={`${props.size} menu-item`}>
            <div class="content">
                <h1 className="title">{props.title}</h1>
                <span clasName="subtitle">Buy Now</span>
            </div>
        </div>
    )
}

export default MenuItem