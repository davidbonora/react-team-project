import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import classes from "../styles/ModalLogin.module.css";
import ModalLoginPass from "../components/ModalLoginPass";
import logo from "../assets/img/LOGO_CODE_WARS_Mesa_de_trabajo_1.png";
import React, { useState } from "react";

function ModalLoginPassword() {
    return (
        <ModalProvider>
            <ModalContext>
                {({ showModal, hideModal }) => (
                    <div className="modalWindow">
                        <div className="modalLogos">
                            <h2>CodeSpace accounts</h2>
                            <img src={logo} alt="" />
                            <button
                                onClick={() =>
                                    hideModal({ component: ModalLoginPass })
                                }
                            >
                                X
                            </button>
                        </div>
                        <div>
                            <h1>ENTER YOUR PASSWORD</h1>
                            <form action="">
                                <input
                                    type="password"
                                    name="pass"
                                    id="inputPass"
                                />
                            </form>
                        </div>
                    </div>
                )}
            </ModalContext>
        </ModalProvider>
    );
}

export default ModalLoginPassword;
