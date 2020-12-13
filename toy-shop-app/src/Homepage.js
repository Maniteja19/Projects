import React from "react"
import "./Homepage.css"
const Homepage = () =>{
    return (
        <div className="homepage">
           <div className="directory-menu">
              <div className="menu-item">
                <div class="content">
                    <h1 className="title">Lego Blocks</h1>
                    <span clasName="subtitle">Buy Now</span>
                </div>
              </div>
              <div className="menu-item">
                <div class="content">
                    <h1 className="title">Barbie doll</h1>
                    <span clasName="subtitle">Buy Now</span>
                </div>
              </div>
              <div className="menu-item">
                <div class="content">
                    <h1 className="title">Trucks</h1>
                    <span clasName="subtitle">Buy Now</span>
                </div>
              </div>
              <div className="menu-item">
                <div class="content">
                    <h1 className="title">Airplane Toy</h1>
                    <span clasName="subtitle">Buy Now</span>
                </div>
              </div>
              <div className="menu-item">
                <div class="content">
                    <h1 className="title">Dancing Robot</h1>
                    <span clasName="subtitle">Buy Now</span>
                </div>
              </div>
           </div>
        </div>
    )
}
export default Homepage;