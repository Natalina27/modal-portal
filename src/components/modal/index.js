import React from 'react';
import Styles from './styles.module.css';

export const Modal = ({isOpen, message, onClose}) => {
    return (
        isOpen && <div className={Styles.modal}>
            <h2>{message}</h2>
            <button className={Styles.close} onClick={onClose}>
                Close
            </button>
        </div>
    );
};
