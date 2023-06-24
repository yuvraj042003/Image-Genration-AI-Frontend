import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import logo from './assets/logo.svg'
import {Home, CreatePost} from './Pages'
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <img src={logo} alt='logo' className='w-32 object-contain'/>
        </Link>
        <Link to='/create-post' className='font-inter font-medium bg-[#6469ff] text-white px-6 py-3 rounded-md' >Create</Link>
      </header>
      <main className='sm:px-8 py-4 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]:'>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-post' element={<CreatePost/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App