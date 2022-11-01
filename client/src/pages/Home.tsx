import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
        <div className='home_buttons'>
            <Link to="/code">Developing</Link>
            <Link to="/Visual Effect">Visual Effects</Link>
        </div>
        
    </>
    
  )
}

export default Home