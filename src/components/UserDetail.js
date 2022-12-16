import axios from 'axios';
import React, { useState,useEffect } from 'react'

function UserDetail({activeUserId}) {
    const [user,setUser]=useState(null);
    const [loading, setLoading]=useState(true);
    useEffect(()=>{
       axios (`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
       .then((res)=>setUser(res.data))
       .finally(()=>setLoading(false));
    },[activeUserId]);
  return (
    <div>
    <h2>Detaylar</h2>
    {loading && <div>Loading...</div>}
    {!loading &&  <pre>
        {JSON.stringify(user,null,2)}
    </pre>}
    </div>
  );
}

export default UserDetail;