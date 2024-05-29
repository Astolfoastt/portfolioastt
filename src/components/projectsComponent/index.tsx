import { projectsData } from "../../data";
import { ProjectsCard } from "./projectCard";
import style from "./style.module.scss";

export const ProjectsComponent = () => {
  return (
    <main  className={style.container}>
      <div className={style.title}>
        <h1>Projetos</h1>
      </div>
      <div>
     
        {projectsData.map((project) => (
          <div key={project.id}>
            <ProjectsCard
              id={project.id}
              name={project.name}
              description={project.description}
              category={project.category}
              repository={project.repository}
              aplication={project.aplication}
              image={project.image}
              skills={project.skills}
            />
          </div>
        ))}
  
      </div>
    </main>
  );
};
