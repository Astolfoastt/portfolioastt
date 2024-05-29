import { ReactNode, useRef } from "react";
import style from "./style.module.scss";
import { createPortal } from "react-dom";

interface ModalProps {
  toggleModal: () => void;
  blockClosing?: boolean;
  children: ReactNode;
  size?: string;
}

export const Modal = ({ children, blockClosing }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);


  return createPortal(
    <main className={style.container}>
      <div ref={blockClosing? null : ref}>{children}</div>
    </main>,
    document.body
  );
};
