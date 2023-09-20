import React from "react";

 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="bg-gray-100 p-4">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src="https://d3cy9zhslanhfa.cloudfront.net/media/3800C044-6298-4575-A05D5C6B7623EE37/4B45D0EC-3482-4759-82DA37D8EA07D229/webimage-8A27671A-8A53-45DC-89D7BF8537F15A0D.png"></img>
       </NavLink>
       <button
        className="lg:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-gray-800 focus:outline-none"
        type="button"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="w-6 h-px bg-gray-600"></span>
        <span className="w-6 h-px bg-gray-600 mt-1"></span>
        <span className="w-6 h-px bg-gray-600 mt-1"></span>
        </button>

        <div
        className="lg:flex lg:items-center lg:w-auto"
        id="navbarSupportedContent"
        >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="mb-2 lg:mb-0">
             <NavLink className="text-gray-800 hover:text-blue-600" to="/create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}