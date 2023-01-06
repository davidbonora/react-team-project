import { ModalProvider, ModalContext, ModalRoot } from "react-multi-modal";
import ModalLoginMail from "../components/ModalLoginMail";

function ModalLogin() {
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
