import React from 'react'
import { Link } from "react-router-dom"
import "./header_footer.css"

export default function HeaderLay() {
  return (
    <header className='container-fluid bg-warning'>
      <nav className='container'>
        <ul className='nav p-2'>
          <li><Link to="/
">Map</Link></li>
          <li><Link to="/graph1">Graph</Link></li>
          <li><Link to="/graphApi">Graph api</Link></li>
          <li><Link to="/dotsGraph">Dots graph</Link></li>
        

        </ul>
      </nav>
    </header>
  )
}
