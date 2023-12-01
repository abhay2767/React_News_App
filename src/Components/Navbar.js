import React, { Component } from 'react'
import Logo from './Images/Logo.png'
import { Link } from 'react-router-dom'

//type rce for react class base componet with export otherwise rcc
export class Navbar extends Component {
    

    render() {
        return (

            <div className='fixed top-0 left-0 right-0'>
                <header class={` text-gray-600 bg-white body-font border`}>
                    <div class="container border mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <Link to='/' class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img className="h-10" src={Logo} alt="logo" />
                            {/* <span class="ml-3 text-xl">News-ARM</span>*/}
                        </Link>
                        <nav class="text-black md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <Link to='/' class=" mr-5 font-semibold hover:text-green-900">General</Link>
                            <Link to='/business' class="mr-5 font-semibold hover:text-green-900">Business</Link>
                            <Link to='/entertainment' class="mr-5 font-semibold hover:text-green-900">Entertainment</Link>
                            <Link to='/health' class="mr-5 font-semibold hover:text-green-900">Health</Link>
                            <Link to='/science' class="mr-5 font-semibold hover:text-green-900">Science</Link>
                            <Link to='/sports' class="mr-5 font-semibold hover:text-green-900">Sports</Link>
                            <Link to='/technology' class="mr-5 font-semibold hover:text-green-900">Technology</Link>
                        </nav>
                        {/* <button class="font-semibold bg-green-700  inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-800 rounded text-base mt-4 md:mt-0">Login */}
                        <label class="text-black relative inline-flex items-center mr-5 cursor-pointer">
                            <input type="checkbox" value="" class="sr-only peer" />
                            <div class="w-11 h-6 bg-black rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                            <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mode</span>
                        </label>
                    </div>
                </header >
            </div >
        )
    }
}

export default Navbar