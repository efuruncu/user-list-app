import React, { useEffect, useState } from 'react';
import axios from 'axios';
function UserList({setActiveUserId}) {
    const [users,setUser]=useState([]);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{

        axios("https://jsonplaceholder.typicode.com/users")
        .then(res=>setUser(res.data))
        .finally(()=>setLoading(false));
    },[]);
  return (
    <div>
        <h2>Kullanıcılar</h2>
        {loading && <div>Loading...</div>}
        <ul className='user-list'>
            {
                users.map((user)=>(
                    <li key={user.id} onClick={()=>setActiveUserId(user.id)}>{user.name}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default UserList;