import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { baseurl } from '../../../service/categories'
import './thirtyDaysUsers.css'
function ThirtyDaysUsers() {
  const [ users, setUsers]= useState([])
  useEffect(()=>{
    const getUsers = async()=>{
      const data = await fetch(`${baseurl}users/getUsers`);
      const cleanData = await data.json()
      return cleanData;
    }
    getUsers().then(res=>setUsers(res.data))
  },[])
  const usersLength = users.length
  return (
    <div className='days' >
      <div id='ordersDays'>
            <h2>{usersLength}</h2>
            <span className='spanCircels text-center'>Out of 500</span>
      </div>
    </div>
  )
}

export default ThirtyDaysUsers;