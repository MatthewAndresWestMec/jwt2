import React from 'react'
import {redirect} from "next/navigation";
import Link from "next/link";
import {logout} from '../lib'
const Home = () => {
  return (
    <div>
    <nav className='header'>
    <h1 className="logo"><a href="/home">Flexbox</a></h1>
      <ul className="main-nav">
        <li><h1><Link href='/home'>Home</Link></h1></li>
        <li><h1><Link href='/profile'>Profile</Link></h1></li>
        <li onClick={async(formdata) =>{
          'use server' 
          await logout();
          redirect('/');
        }}><h1><Link href='/'>Logout</Link></h1></li>
        {/* <li><form action={
        async(formdata) =>{
          'use server' 
          await logout();
          redirect('/');
        }}><button type='submit'>Logout</button></form></li> */}
      </ul>
    </nav>
    <h1>HERE IS THE HOME PAGE</h1>
    </div>
  )
}

export default Home
