import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";

  import {
    BiLogoTypescript,
    BiLogoPython,
    BiLogoCPlusPlus
  } from "react-icons/bi";

  import{
    SiSqlite,
  } from "react-icons/si";
  
  import "../styles/components/technologiescontainer.sass";
  
  const technologies = [
    { id: "typescript", name: "TypeScript", icon: <BiLogoTypescript/> , descricao:"TypeScript é uma linguagem de programação que estende o JavaScript, adicionando tipagem estática opcional e recursos avançados de controle de tipos."},
    
    { id: "sqlite", name: "SQLite", icon: <SiSqlite />, descricao: "SQLite é um sistema de gerenciamento de banco de dados relacional leve e incorporado, amplamente utilizado em aplicativos móveis e de desktop para armazenar dados localmente." },

    { id: "js", name: "JavaScript", icon: <DiJsBadge /> ,descricao:"JavaScript é uma linguagem de programação de alto nível que permite a criação de interatividade e funcionalidades dinâmicas em páginas da web."},

    { id: "node", name: "Node.js", icon: <DiNodejsSmall />,descricao:"Node.js é um ambiente de tempo de execução JavaScript que permite que você execute código JavaScript no servidor, facilitando a construção de aplicativos web escaláveis." },
    { id: "python", name: "Python", icon: <BiLogoPython />,descricao:"Python é uma linguagem de programação de alto nível conhecida por sua legibilidade e simplicidade, usada para desenvolvimento web, científico, automação e muito mais." },
    
    { id: "react", name: "React", icon: <DiReact />,descricao:" React é uma biblioteca JavaScript de código aberto mantida pelo Facebook para a criação de interfaces de usuário interativas e componentes reutilizáveis em aplicativos web." },

    { id: "cplusplus", name: "C++", icon: <BiLogoCPlusPlus />,descricao:"C++ é uma linguagem de programação de propósito geral que se destaca por seu alto desempenho e é usada em uma variedade de aplicações, incluindo jogos, sistemas operacionais e aplicativos de baixo nível." },
    
    { id: "css", name: "CSS3", icon: <DiCss3 />,descricao:"CSS3 é a versão mais recente das folhas de estilo em cascata (CSS) e é usada para estilizar elementos HTML em páginas da web, oferecendo recursos avançados de design." },
  ];
  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias que domino</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              <h1>{tech.icon}</h1>
              <div className="technology-info">
                <h3><b>{tech.name}</b></h3>
                <p>{tech.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;