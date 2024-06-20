import iconProject from "./assets/Rectangle 16.svg";
// import cssIcon from "./assets/skills/cssIcon.svg"
// import htmlIcon from "./assets/skills/htmlIcon.svg"
import javaScriptIcon from "./assets/skills/javaScriptIcon.svg";
// import nodeJsIcon from "./assets/skills/nodeJsIcon.svg"
import postgreIcon from "./assets/skills/postgreIcon.svg";
import sassIcon from "./assets/skills/sassIcon.svg";
import typeScriptIcon from "./assets/skills/typeScriptIcon.svg";
import reactIcon from "./assets/skills/reactIcon.svg";

export interface Project {
  id: number;
  name: string;
  description: string;
  category: string;
  aplication: string;
  repository: string;
  image: string;
  skills: string[];
}

export interface Formations {
  id: number;
  name: string;
  course: string;
  description: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
    name: "Kenzie Hub",
    description:
      "Kenzie Hub é uma plataforma revolucionária criada para desenvolvedores que buscam monitorar e registrar seu progresso em diversas tecnologias\n" +
      "de programação. A ferramenta se destaca por sua interface intuitiva e fácil de usar, proporcionando uma experiência agradável e eficiente.\n",
    category: "Front-End",
    aplication: "https://react-entrega-kenzie-hub-astolfoastt.vercel.app",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-Astolfoastt",
    image: iconProject,
    skills: [javaScriptIcon, sassIcon],
  },
  {
    id: 2,
    name: "Contact Hub",
    description:
      "Este é um projeto Full-Stack inovador, projetado para o gerenciamento eficiente de contatos. Ele oferece funcionalidades abrangentes,\n" +
      "incluindo login com autenticação segura, criação de contatos e gerenciamento detalhado desses contatos. O sistema é robusto e incorpora\n",
    category: "Full-Stack",
    aplication: "https://contacthub-f.vercel.app",
    repository:
      "https://github.com/Astolfoastt/m5-projeto-final-kanvas-Astolfoastt",
    image: iconProject,
    skills: [typeScriptIcon, reactIcon, sassIcon],
  },
  {
    id: 3,
    name: "Movies",
    description:
      "Este é um projeto Full-Stack inovador, projetado para o gerenciamento eficiente de contatos. Ele oferece funcionalidades abrangentes,\n" +
      "incluindo login com autenticação segura, criação de contatos e gerenciamento detalhado desses contatos. O sistema é robusto e incorpora\n",
    category: "Bak-End",
    aplication: "https://contacthub-f.vercel.app",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm_Astolfoastt",
    image: iconProject,
    skills: [typeScriptIcon, postgreIcon],
  },
  {
    id: 4,
    name: "Movies",
    description:
      "Este é um projeto Full-Stack inovador, projetado para o gerenciamento eficiente de contatos. Ele oferece funcionalidades abrangentes,\n" +
      "incluindo login com autenticação segura, criação de contatos e gerenciamento detalhado desses contatos. O sistema é robusto e incorpora\n",
    category: "Bak-End",
    aplication: "https://contacthub-f.vercel.app",
    repository:
      "https://github.com/Kenzie-Academy-Brasil-Developers/m4-movies-typeorm_Astolfoastt",
    image: iconProject,
    skills: [typeScriptIcon, postgreIcon],
  },
];

export const formationsData: Formations[] = [
  {
    id: 1,
    name: "Kenzie Academy Brasil",
    course: "Desenvolvimento Web",
    description:
      "Atividades e grupos: Curso de 2.000 horas de Desenvolvimento Full Stack que abrangem tecnologias Front End e Back End\n" +
      "além de soft skills necessários para o mercado de trabalho. Entre linguagens e tecnologias, estão HTML5, CSS3, JavaScript (ES6+),\n" +
      "React, Node.js, Python (Django e Flask) e SQL.",
  },
  {
    id: 2,
    name: "Estácio",
    course: "Analise e Desenvolvimento de Sistemas",
    description:
      "O curso de Análise e Desenvolvimento de Sistemas é voltado para a formação de profissionais capacitados a atuar no desenvolvimento,\n" +
      "implementação e manutenção de sistemas de informação,\n" +
      "atendendo às necessidades das organizações e contribuindo para a inovação tecnológica.",
  },
  {
    id: 3,
    name: "Kenzie Hub",
    course: "Front-End",
    description:
      "O curso de Análise e Desenvolvimento de Sistemas é voltado para a formação de profissionais capacitados a atuar no desenvolvimento,\n" +
      "implementação e manutenção de sistemas de informação,\n" +
      "atendendo às necessidades das organizações e contribuindo para a inovação tecnológica.",
  },
  {
    id: 4,
    name: "Kenzie Hub",
    course: "Front-End",
    description:
      "O curso de Análise e Desenvolvimento de Sistemas é voltado para a formação de profissionais capacitados a atuar no desenvolvimento,\n" +
      "implementação e manutenção de sistemas de informação,\n" +
      "atendendo às necessidades das organizações e contribuindo para a inovação tecnológica.",
  },
  {
    id: 5,
    name: "Kenzie Hub",
    course: "Front-End",
    description:
      "O curso de Análise e Desenvolvimento de Sistemas é voltado para a formação de profissionais capacitados a atuar no desenvolvimento,\n" +
      "implementação e manutenção de sistemas de informação,\n" +
      "atendendo às necessidades das organizações e contribuindo para a inovação tecnológica.",
  },
];
