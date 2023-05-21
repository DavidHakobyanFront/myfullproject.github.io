import React from 'react';
import css from './footer.module.css'

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <div className={css.footer}>
            @copyright {date}
        </div>
    );
};

export default Footer;