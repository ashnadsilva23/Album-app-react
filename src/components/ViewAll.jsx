import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

function ViewAll() {
  const[data,changeData]=useState([])
    const fetchdata=()=>{
      axios.get("https://jsonplaceholder.typicode.com/albums").then(
        (response)=>{
          changeData(response.data)

        }
      ).catch().finally()
    }
   useEffect(()=>{fetchdata()},[])
  return (
    <div>
      <Navbar/>
      <div className="conatiner">
          <h1 align="center"><u>View Album</u></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table className="table table-striped">
                    
                        <thead>
                          <tr>
                            <th scope="col">User Id</th>
                            <th scope="col">Id </th>
                            <th scope="col">Title</th>
                        
                          </tr>
                        </thead>
                        <tbody>
                       {data.map(
                        (value,index)=>{
                          return  <tr>
                          <td>{value.userId}</td>
                          <td>{value.id}</td>
                          <td>{value.title}</td>
                        </tr>
                        }
                       )}
                          
                          
                          
                          
                       
                         
                        </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll