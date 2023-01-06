import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import classes from "../styles/ModalLogin.module.css";
import ModalLoginPass from "../components/ModalLoginPass";
import logo from "../assets/img/LOGO_CODE_WARS_Mesa_de_trabajo_1.png";
import React, { useState } from "react";
import data from "../utils/user.json";

function ModalLoginPassword() {
    const modalShown = true;
    return (
        <ModalProvider>
            <ModalContext>
                {({ showModal, hideModal }) => (
                    <div className={classes.modalWindow}>
                        <div className={classes.modalLogos}>
                            <h2>CodeSpace accounts</h2>
                            <img src={logo} alt="" />
                            <button
                                onClick={() =>
                                    modalShown &&
                                    hideModal({ component: ModalLoginPass })
                                }
                            >
                                X
                            </button>
                            <p>{data.mail}</p>
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
                            <button>Forgot your password?</button>
                            <button>Sign In</button>
                        </div>
                    </div>
                )}
            </ModalContext>
        </ModalProvider>
    );
}

export default ModalLoginPassword;
