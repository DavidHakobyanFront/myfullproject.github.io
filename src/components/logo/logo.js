import React from 'react';
import css from './logo.module.css'
import logo from '../../assests/img/img-logo.png'
const Logo = () => {
    return (
        <div className={css.logo}>
            <img src={logo} alt="logo" />
        </div>
    );
};

export default Logo;