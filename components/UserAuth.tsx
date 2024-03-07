"use client"

import React, { useState } from 'react'

interface iState {
    user: boolean;
}

const UserAuth = () => {


    const [auth, setAuth] = useState <iState>({
        user: false
    })

    const handleLogin = () => {

        setAuth({user: true})

    }

    const handleLogout = () => {

        setAuth({user: false})
        
    }

  return (
    <div>

<section className='p-6 max-w-[1220px] mx-auto shadow rounded-md'>

    <div className='flex flex-col justify-center items-center'>



        {
            auth.user && auth.user ? 
            (  <h1>Welcome to dashboad</h1>)
            :
            ( <h2>Please login first</h2>)
        }


<div className='flex space-x-4'>



    
{              auth.user && auth.user ? 

            
            (    <button onClick={handleLogout} className='bg-red-500 text-white rounded-md p-2'>Logout</button> )
            :
            (  <button onClick={handleLogin} className='bg-blue-400 rounded-md text-white p-2'>Login</button> )
            
        }
    
   

 

    </div>
    </div>

</section>

    </div>
  )
}

export default UserAuth