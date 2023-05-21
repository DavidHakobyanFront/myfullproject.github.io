import React from 'react';
import css from './header.module.css'
import Logo from "../logo/logo";
import Menu from "../menu/menu";
const Header = () => {
    return (
        <div className={css.header}>
            <Logo />
            <Menu />
            <button onClick={() => {
                localStorage.removeItem('token')
                window.location.reload()
            }}>
                Logout
            </button>
        </div>
    );
};

export default Header;