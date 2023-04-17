import React from "react";
import './header.css';

const Header = () => {

    return (
        <header>
            <div className="logo">
                <i class="fa-brands fa-reddit"></i>
                <span>Reddit</span>Client
            </div>
            <form className="search" onSubmit={''}>
                <input 
                    type="text" 
                    placeholder="Search"
                    value={''}
                    onChange={''}
                    aria-label="Search posts"
                    />
                <button type="submit" onClick={''} aria-label="">
                <i class="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </header>
    )
}

export default Header;