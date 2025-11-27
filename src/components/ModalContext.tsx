// // components/ModalContext.tsx
// import React, { createContext, useState } from "react";

// interface ModalContextProps {
//   isModalOpen: boolean;
//   openModal: () => void;
//   closeModal: () => void;
// }

// export const ModalContext = createContext<ModalContextProps | undefined>(
//   undefined
// );

// interface ModalProviderProps {
//   children: React.ReactNode;
// }

// export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
//       {children}
//     </ModalContext.Provider>
//   );
// };
