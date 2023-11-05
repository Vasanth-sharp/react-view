import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar navbar-light">
        <Link className="navbar-brand" to="/">Thoughts</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link className="nav-link active" to="/">Home<span class="sr-only">(current)</span></Link>
                <Link className="nav-link" to="/create">Create</Link>
            </div>
        </div>
</nav>
  )
}
