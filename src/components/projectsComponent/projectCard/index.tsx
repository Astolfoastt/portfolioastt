import { Project } from "../../../data";
import style from "./style.module.scss";
import aplicationIcon from "./../../../assets/projects/aplicationIcon.svg";
import repositoryIcon from "./../../../assets/projects/repository.svg";

export const ProjectsCard = ({
  name,
  description,
  category,
  repository,
  aplication,
  image,
  skills,
}: Project) => {
  return (
    <div className={style.container}>
      <section className={style.contentProject}>
        <div>
          <img src={image} alt="" />
        </div>
        <div className={style.description}>
          <h1>{name}</h1>
          <h2>{category}</h2>
          <p>{description}</p>
        </div>
      </section>
      <section className={style.containerSecondy}>
          <h3>Tecnologias usadas:</h3>
        <div className={style.containerTechs}>
          {skills.map((tech, index) => (
            <img key={index} src={tech} alt={`Tecnologia ${index + 1}`} />
          ))}
        </div>
      </section>
        <div className={style.links}>
          <div className={style.containerLinks}>
            <img src={aplicationIcon} alt="" />
            <a href={aplication} target="_blank">
              Aplicação
            </a>
          </div>
          <div className={style.containerLinks}>
            <img src={repositoryIcon} alt="" />
            <a href={repository} target="_blank">
              Repositório do projeto
            </a>
          </div>
        </div>
      <hr />
    </div>
  );
};
