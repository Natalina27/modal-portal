import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './style.module.css';

export const Portal =({isOpen, message, onClose})=> {
    return isOpen && ReactDOM.createPortal(
        <div className={Styles.portal}>
            <h2>{message}</h2>
            <button
                className={Styles.close}
                onClick={onClose}>Close</button>
        </div>
        ,document.body);
}
