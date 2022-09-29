import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';//returns the location object used by the react-router. This object represents the current URL.

export default function Navigation() {

    //assigning location variable
    const location = useLocation();
    //destructuring pathname from location --> /contact
    const { pathname } = location;
    //split method to get the name of the path in array --> ['', 'contact']
    const splitLocation = pathname.split("/");


    return (
        <div className="navigation">
            <nav className="nav">
                <ul>
                    <li className={splitLocation[1] === "" ? "actived" : ""}>
                        <Link to={''}>Home</Link>
                    </li>
                    <li className={splitLocation[1] === "news" ? "actived" : ""}>
                        <Link to={'news'}>News</Link>
                    </li>
                    <li className={splitLocation[1] === "about" ? "actived" : ""}>
                        <Link to={'about'}>About</Link>
                    </li>
                    <li className={splitLocation[1] === "contact" ? "actived" : ""}>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )

}