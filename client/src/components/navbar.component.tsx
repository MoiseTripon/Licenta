import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props:any) {
 
  const {currentUser, showModeratorBoard, showAdminBoard} = props.navbarData;
    return (
        <React.Fragment>
            <Link to={"/"} className="text-white text-2xl font-semibold">
              Student Manager
            </Link>
            <div className="space-x-4">
                <div className="flex space-x-4">
                    <Link to={"/home"} className="text-white hover:underline">
                      Home
                    </Link>

                  {showModeratorBoard && (
                      <Link to={"/mod"} className="text-white hover:underline">
                        Moderator Board
                      </Link>
                  )}

                  {showAdminBoard && (
                      <Link to={"/admin"} className="text-white hover:underline">
                        Admin Board
                      </Link>
                  )}

                  {currentUser && (
                      <Link to={"/user"} className="text-white hover:underline">
                        User
                      </Link>
                  )}
                  {currentUser ? (
                    <div className="flex space-x-4">
                      <Link to={"/profile"} className="text-white hover:underline">
                        {currentUser.username}
                      </Link>
                      <a href="/login" className="text-white hover:underline" onClick={props.logOut}>
                        LogOut
                      </a>
                    </div>
                    ) : (
                    <div className="flex space-x-4">
                      <Link to={"/login"} className="text-white hover:underline">
                        Login
                      </Link>
                      <Link to={"/register"} className="text-white hover:underline">
                        Sign Up
                      </Link>
                    </div>
                )}
                </div>
              </div>
        </React.Fragment>
    );               
}