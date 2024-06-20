import profileImg from "./../../assets/header/profile.png";
import style from "./style.module.scss";
import email from "./../../assets/socialIcons/email.svg";
import github from "./../../assets/socialIcons/github.svg";
import instagram from "./../../assets/socialIcons/instagram.svg";
import linkedin from "./../../assets/socialIcons/linkedin.svg";
import wpp from "./../../assets/socialIcons/wpp.svg";
import { Link } from "react-scroll";

export const HeaderComponent = () => {
  return (
    <header className={style.container}>
      <div className={style.img}>
        <img src={profileImg} alt="imagem de perfil" />
      </div>
      <div className={style.title}>
        <h1>Astolfo Daniel</h1>
        <h2>Desenvolvedor web</h2>
      </div>
      <nav>
        <ul className={style.containerUl}>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              <div>
                <p>Projetos</p>
              </div>
            </Link>
          </li>
          <li>
            <Link to="formations" smooth={true} duration={500}>
              <div>
                <p>Formações</p>
              </div>
            </Link>
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
      </nav>
      <div className={style.socials}>
        <img src={github} alt="redirecionamento github" />
        <img src={linkedin} alt="redirecionamento linkedin" />
        <img src={email} alt="redirecionamento email" />
        <img src={wpp} alt="redirecionamento whatsapp" />
        <img src={instagram} alt="redirecionamento instagram" />
      </div>
    </header>
  );
};
