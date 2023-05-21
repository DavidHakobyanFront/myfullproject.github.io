import React from 'react';
import css from './modal.css';
import icon from '../../assests/img/error-icon-png-15.jpg'
const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content" : "modal"} onClick={e => e.stopPropagation()}>
                <img src={icon} className="icon" />
                <p>Error 404</p>
            </div>
        </div>
    );
};

export default Modal;