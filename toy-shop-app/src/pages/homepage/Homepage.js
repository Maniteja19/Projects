import React from "react"
import "./Homepage.css"
import {Link} from "react-router-dom"
import Directory from "../../components/menu-item/directory-menu/DirectoryMenu"
const Homepage = () =>{
    return (
        <div className="homepage">
             <Directory /> 
        </div>
    )
}
export default Homepage;