import RedesSociais from "./RedesSociais";

import Avatar from "../img/eu.jpeg";

import InformationContainer from "./informationContainer";

import "../styles/components/Sidebar.sass";

const Sidebar = () => {
  return (<aside id="sidebar">
    <p>imagem</p>
    <img src={Avatar} alt="Yanky Jhonatha" />
    <p className="title">Desenvolvedor Front-End</p>
    <RedesSociais/>
    <InformationContainer/>
    <a href="" className="btn">
      Baixar CV 
    </a>
    </aside>
  );
}

export default Sidebar