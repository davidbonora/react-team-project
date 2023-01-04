import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import ModalLoginMail from "../components/ModalLoginMail";
import data from "../utils/user.json";

function ModalLogin() {
    let mail = data.mail;
    console.log(mail);

    return (
        <ModalProvider>
            <ModalContext>
                {({ showModal, hideModal }) => (
                    <>
                        <button
                            onClick={() =>
                                showModal({ component: ModalLoginMail })
                            }
                        >
                            Log In
                        </button>
                        <ModalRoot />
                    </>
                )}
            </ModalContext>
        </ModalProvider>
    );
}

export default ModalLogin;
