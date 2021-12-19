import React, { createContext, useState } from "react"

export const ModalContext = createContext();

export function ModalProvider({ children }){
    const [modal, setModal] = useState(false);
    
    const showModal = () => setModal(!modal);

    return (
        <ModalContext.Provider
        value={{
            modal,
            showModal,
        }}
        >
            {children}
        </ModalContext.Provider>
    )
}