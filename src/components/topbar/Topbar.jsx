import { useState } from "react";
import "./topbar.scss";

function Topbar() {
  const [showMenu,setShowMenu] = useState(true)
  return (
    <div className={`topbar ${showMenu && "active"}`}>
      
      <div className="logo">
        <div className="hemburger" onClick={()=>setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <span>Mahesh.</span>
      </div>
      <ul className="links">
        <a href="#intro">
          <li>Intro</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#works">
          <li>Works</li>
        </a>
        <a href="#testimonials">
          <li>Testimonials</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <div className="contact">
        <p>8168-XXX-123</p>
        <p>portfolio-xxx-@email.com</p>
      </div>
    </div>
  );
}

export default Topbar;
