import { ProjectsComponent } from "../../components/projectsComponent"
import style from "./style.module.scss";

export const ProjectPage = () => {
    return (
        <main className={style.container}>
            <ProjectsComponent />
        </main>
    )

}