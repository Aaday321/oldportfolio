import { Link } from "react-router-dom"
import React from "react"



export default function Nav () {

    return(
            
        <nav>
            <h1>LO<br/>GO</h1>
            <div className="links">
                <Link to="#">1</Link>
                <Link to="#">2</Link>
                <Link to="#">3</Link>
            </div>

        </nav>
    )

}