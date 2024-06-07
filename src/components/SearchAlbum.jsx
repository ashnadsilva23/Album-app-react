import React from 'react'
import Navbar from './Navbar'

function SearchAlbum() {
  return (
        <div>
            <Navbar/>

        <div className="container">       
            <h1 align="center"><u>Search Album</u></h1>
            <div class="card">

  <div class="card-body">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Album Name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default SearchAlbum