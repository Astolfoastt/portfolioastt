import { Modal } from "..";
import style from "./style.module.scss";
import email from "./../../../assets/socialIcons/email.svg";
import github from "./../../../assets/socialIcons/github.svg";
import instagram from "./../../../assets/socialIcons/instagram.svg";
import linkedin from "./../../../assets/socialIcons/linkedin.svg";
import wpp from "./../../../assets/socialIcons/wpp.svg";

interface ModalProps {
  toggleModal: () => void;
}

export const ModalMenu = ({ toggleModal}: ModalProps) => {
  return (
    <Modal toggleModal={toggleModal}  size="70%">
      <nav className={style.container}>
        <div className={style.presentation}>
          <p>
            Sou desenvolvedor web, procuro sempre desenvolver projetos de forma
            clara e tecnológica. Atualmente sou estudante de Analise e
            Densenvolvimento de Sistemas na Estácio.
          </p>
        </div>
        <ul className={style.containerUl}>
          <li>
            <div>
              <p>Projetos</p>
            </div>
          </li>
          <li>
            <div>
              <p>Formações</p>
            </div>
          </li>
          <li>
            <div>
              <p>Sobre mim</p>
            </div>
          </li>
          <li>
            <div>
              <p>Contato</p>
            </div>
          </li>
        </ul>
        <div className={style.socials}>
          <img src={github} alt="redirecionamento github" />
          <img src={linkedin} alt="redirecionamento linkedin" />
          <img src={email} alt="redirecionamento email" />
          <img src={wpp} alt="redirecionamento whatsapp" />
          <img src={instagram} alt="redirecionamento instagram" />
        </div>
      </nav>
    </Modal>
  );
};
