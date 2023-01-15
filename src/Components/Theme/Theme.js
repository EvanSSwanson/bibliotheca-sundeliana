import { NavLink } from "react-router-dom"
import "./Theme.css"

const Theme = () => {

    return (
        <div className="Theme">
             <nav className="nav-bar">
                <div className="icon"></div>
                <NavLink to="/" className="home-link">
                    <h1 className="home-title">BIBLIOTHECA SUNDELIANA</h1>
                </NavLink>
            </nav>
            <h1 className="message">Work in Progress!<br></br>Soon you can view a selection of verses by theme!</h1>
        </div>
    )
}

export default Theme