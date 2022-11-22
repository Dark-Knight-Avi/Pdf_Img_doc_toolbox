import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import login from '../../assets/login.png'

function Navbar() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="cursor-pointer flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img width={"40px"} src={logo} alt="logo" />
          <span className="ml-3 text-xl">iConvert</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="cursor-pointer mr-5 hover:text-white" to='/'>Home</Link>
          <Link className="cursor-pointer mr-5 hover:text-white" to='/features'>Features</Link>
          <Link className="cursor-pointer mr-5 hover:text-white" to='/play'>Playground</Link>
        </nav>
        <Link to='/login' className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
          <img width={"40px"} src={login} alt="login" />
        </Link>
      </div>
    </header>
  )
}

export default Navbar