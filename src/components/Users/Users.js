import React from 'react'
import UserCard from '../User/UserCard'
import "./Users.css"

const Users = ({users}) => {
    return (
        <div>
             <h1>Welcome, this is the Users List Page</h1>
             <div className="usersList">
                 {users.map(user=><UserCard user={user} />)}
             </div>
        </div>
    )
}

export default Users
