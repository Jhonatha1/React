import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/redesociais.sass'

const redesSociais = [
        { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/yanky-jhonatha/" },
        { name: "github", icon: <FaGithub />, url: "https://www.github.com/Jhonatha1" },
        { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/yanky_fonteboa/"},
        
];

const RedesSociais = () => {
  return <section id="redes-sociais">
    {redesSociais.map((network)=>(
        <a href={network.url} className="social-btn" id={network.name} key={network.name}>
        {network.icon}
        </a>
    ))}
  </section>
}

export default RedesSociais