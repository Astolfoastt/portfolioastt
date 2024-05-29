// import { formationsData } from "../../data";
// import { FormationsCard } from "./cardComponent";
import style from "./style.module.scss";

export const FormationsComponent = () => {
  return (
    <main className={style.container}>
      <div className={style.title}>
        <h1>Formações</h1>
      </div>
      {/* <div>
        {formationsData.map((formation) => (
          <div key={formation.id}>
            <FormationsCard
              id={formation.id}
              name={formation.name}
              course={formation.course}
              description={formation.description}
            />
          </div>
        ))} */}
      {/* </div> */}
    </main>
  );
};
