import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import classes from "../styles/ModalLogin.module.css";
import ModalLoginPassword from "../components/ModalLoginPass";
import logo from "../assets/img/LOGO_CODE_WARS_Mesa_de_trabajo_1.png";
import React, { useState } from "react";

function ModalLoginMail() {
    return (
        <ModalProvider>
            <ModalContext>
                {({ showModal, hideModal }) => (
                    <div className={classes.modalWindow}>
                        <div className="modalLogos">
                            <h2>CodeSpace accounts</h2>
                            <img src={logo} alt="" />
                            <button
                                onClick={() =>
                                    hideModal({ component: ModalLoginMail })
                                }
                            >
                                X
                            </button>
                        </div>
                        <div>
                            <h1>ENTER YOUR EMAIL ADDRESS</h1>
                            <form action="">
                                <input
                                    type="email"
                                    name="email"
                                    id="inputMail"
                                />
                            </form>
                            <button
                                onClick={() =>
                                    showModal({ component: ModalLoginPassword })
                                }
                            >
                                Continue
                            </button>

                            <ModalRoot />
                        </div>
                    </div>
                )}
            </ModalContext>
        </ModalProvider>
    );
}

export default ModalLoginMail;
