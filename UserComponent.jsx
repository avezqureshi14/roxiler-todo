import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserComponent = () => {
    const users = useSelector((state)=>state?.allUsers?.users?.users)
    // console.log(users)
  return (
    <>
        <div className="user-cards">
        
            {users?.map((user)=>{
                return(
                  <Link to={`/user/${user.id}`} ><h1>{user.firstName}</h1></Link>  
                    )
            })}
        
        </div>
    </>
  )
}

export default UserComponent