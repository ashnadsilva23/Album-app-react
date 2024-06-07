import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="#">Doctor App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"> Add Album</Link>
        </li>
       
        <li class="nav-item">
          <Link class="nav-link" to="/search"> Search Album</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/delete"> Delete Album</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link " to="/view"> View Album</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar