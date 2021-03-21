import React, {useState} from 'react';
import { Portal } from '../portal';
import {Modal} from "../modal";
import Styles from './style.module.css';

export const OurComponent = ()  => {
    const [openModal, setOpenModal] = useState(false);
    const [openPortal, setOpenPortal] = useState(false);
    return (
        <div className={Styles.container}>
            <div className={Styles.buttonContainer}>
                <button
                    className={Styles.modalBtn}
                    onClick={() => setOpenModal(true)
                    }>Open Modal</button>
                <button
                    className={Styles.portalBtn}
                    onClick={() => setOpenPortal(true)
                    }>Open Portal</button>
                <Modal
                    message="Hi I'm Modal !"
                    isOpen={openModal}
                    onClose={() => setOpenModal(false)
                    }
                />
                <Portal
                    message="Hi I'm Portal!"
                    isOpen={openPortal}
                    onClose={() => setOpenPortal(false)
                    }
                />
            </div>
        </div>
    )
}