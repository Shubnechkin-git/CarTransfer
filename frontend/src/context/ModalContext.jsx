import { createContext, useContext, useMemo, useState } from "react";

const ModalContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const providerValue = useMemo(
    () => ({
      isShowModal,
      setIsShowModal,
    }),
    [isShowModal]
  );

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within ModalProvider");
  }
  return context;
};
