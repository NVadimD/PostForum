import React from "react";
import cl from "./MyModal.module.css";
import MyBtn from "../button/MyBtn";

const MyModal = ({ children, visible, setVisible }) => {
    const modalCl = `${cl.modal} ${visible ? cl.active : ""}`;

    return (
        <div>
            <MyBtn large onClick={() => {setVisible(true)}}>Create new post</MyBtn>
            <div className={modalCl} onClick={() => setVisible(false)}>
                <div className={cl.modal__content} onClick={event => event.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MyModal;
