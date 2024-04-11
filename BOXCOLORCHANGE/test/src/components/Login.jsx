import React from 'react'
import video from "../Assets/watermarked_preview.mp4"
import './Login.css'
import ReactPlayer from 'react-player'


const Login = () => {
  return (
    <div>
        <ReactPlayer className="" id="video" playing={true} muted={true} loop={true} url={video} type="video/mp4"> </ReactPlayer>
        {/* <div className='border-3 border-cyan-400 z-10 relative'> */}
        <h2 className='mt-36 relative z-10 text-white font-bold text-6xl underline'>Enter your details below:</h2>
        
        <label className="relative z-10 text-white font-bold text-4xl" for="username">Username</label>
        <input id="username" className='p-2 mt-10 relative z-10 mx-4 my-5 border-black border-2 rounded-lg' placeholder='Enter your username...'/><br/>
        
        <label className="relative z-10 text-white font-bold text-4xl mx-1" for="pass">Password</label>
        <input id="pass" className='p-2 relative z-10 mx-2 border-black border-2 rounded-lg' placeholder="Enter your password..." type="password"/><br/>
        
        <button className='relative z-10 bg-white my-10 p-3 text-black hover:bg-blue-300 rounded-xl border-2 border-black font-bold'>Sign In</button>
       {/* </div> */}
    </div>
  )
}

export default Login