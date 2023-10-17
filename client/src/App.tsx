import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AuthService from "./services/auth.service";
import IUser from './types/user.type';

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import EventBus from "./common/EventBus";
import Navbar from "./components/navbar.component";


type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        };
      }
    
      componentDidMount() {
        const user = AuthService.getCurrentUser();
    
        if (user) {
          this.setState({
            currentUser: user,
            showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
            showAdminBoard: user.roles.includes("ROLE_ADMIN"),
          });
        }
    
        EventBus.on("logout", this.logOut);
      }
    
      componentWillUnmount() {
        EventBus.remove("logout", this.logOut);
      }
    
      logOut() {
        AuthService.logout();
        this.setState({
          showModeratorBoard: false,
          showAdminBoard: false,
          currentUser: undefined,
        });
      }

  render() {

    return (
        <div>
          <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Navbar navbarData={this.state} logOut={this.logOut}/> 
            </div>
          </nav>
  

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;