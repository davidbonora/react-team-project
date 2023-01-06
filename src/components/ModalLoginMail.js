import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import classes from "../styles/ModalLogin.module.css";
import ModalLoginPassword from "../components/ModalLoginPass";
import logo from "../assets/img/LOGO_CODE_WARS_Mesa_de_trabajo_1.png";
import React, { useState } from "react";
import data from "../utils/user.json";

function ModalLoginMail() {
    let mail = data.mail;

    const [mailInput, setMailInput] = useState("");

    const checkMail = () => {
        if (mail === mailInput) {
            return true;
        }
    }

    const handleSubmit = (event) => {
        console.log("handleSubmit ran");
        event.preventDefault();
    };

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
                                    checkMail &&
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
                                    onChange={(event) =>
                                        setMailInput(event.target.value)
                                    }
                                />
                            </form>
                            <button
                                onClick={() =>
                                    showModal({ component: ModalLoginPassword }) && hideModal({ component: ModalLoginMail })
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
