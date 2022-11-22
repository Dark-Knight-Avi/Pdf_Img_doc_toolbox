import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import login from '../../assets/login.png'
import signup from '../../assets/signup.png'
import homebg from '../../assets/hero-img.png'

function Home() {
  return (
    <div className="px-10 toolbox__home h-[90vh] flex justify-around items-center bg-gray-900">
      <div className="toolbox__home-left pr-16 p-10 text-white">
        <h2 className="text-5xl text-cyan-300 my-5 font-bold">Welcome to iConvert!</h2>
        <p className="mb-3">Best website to play with pdfs, images, docs, etc. Convert Image to Pdf, Pdf to Image, Docs to Pdf, Pdf to Docs, Marge Pdfs, etc..</p>
        <div className="toolbox__home-left_buttons">
        <Link to='/signup' className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign up
          <img className="pl-2" width={"30px"} src={signup} alt="signup" />
        </Link>
        <Link to='/login' className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Login
          <img className="pl-2" width={"30px"} src={login} alt="login" />
        </Link>
        </div>
      </div>
      <div className="toolbox__home-right p-10">
        <img src={homebg} alt="homebg" />
      </div>
    </div>
  )
}

export default Home