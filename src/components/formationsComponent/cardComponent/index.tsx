import { Formations } from "../../../data";
import style from "./style.module.scss";

export const FormationsCard = ({ name, course, description }: Formations) => {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>{name}</h1>
        <h2>{course}</h2>
      </div>
      <div className={style.description}>
        <p>{description}</p>
      </div>
      <hr />
    </div>
  );
};
