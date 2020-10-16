import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class NavBar extends Component{
    state = {

    }
    render(){
        return(
            <nav className="navbar">
                <ul className="navbarul">
                    <li className="home"><NavLink to="/"><button>Home</button></NavLink></li>
                    <li><NavLink to="/fetchpostdata"><button>Fetch Post Data</button></NavLink></li>
                    <li><NavLink to="/renderpostdata"><button>Render Post Data</button></NavLink></li>
                    <li><NavLink to="/fetchtitledata"><button>Fetch Title Data</button></NavLink></li>
                    <li><NavLink to="/rendertitledata"><button>Render Title Data</button></NavLink></li>
                    <li><NavLink to="/cleardata"><button>Clear Redux State</button></NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar;