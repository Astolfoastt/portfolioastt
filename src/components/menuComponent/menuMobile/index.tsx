import { useState } from "react";
import homeIcon from "./../../../assets/menu/home.svg";
import menuIcon from "./../../../assets/menu/menu.svg";
import modeIcon from "./../../../assets/menu/modeTheme.svg";
import closeMenu from "./../../../assets/menu/closeMenu.svg";

import style from "./style.module.scss";
import { ModalMenu } from "../../modalComponent/menuModal";
import { Link } from "react-scroll";

export const MenuMobile = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => setIsOpenModal(!isOpenModal);

  return (
    <nav className={style.container}>
      <Link to="projects" smooth={true} duration={500}>
        <div>
          <img src={homeIcon} alt="icone página principal" />
        </div>
      </Link>
      <div className={style.buttonModal}>
        {isOpenModal ? (
          <img
            src={closeMenu}
            alt="Ícone de fechar menu"
            onClick={toggleModal}
          />
        ) : (
          <img
            className={style.iconMenu}
            src={menuIcon}
            alt="icone abertura de menu"
            onClick={toggleModal}
          />
        )}
        {isOpenModal && <ModalMenu toggleModal={toggleModal} />}
      </div>
      <img
        className={style.iconMode}
        src={modeIcon}
        alt="icone alteração de tema"
      />
    </nav>
  );
};
