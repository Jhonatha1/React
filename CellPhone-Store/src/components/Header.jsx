import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imagemLogo from '../components/img/download.png';
import imagemCarrinho from '../components/img/carrinho-vazio.png';
import imagemHome from '../components/img/casa.png';
import imagemPerfil from '../components/img/perfil.png';
import { getItem } from '../services/LocalStorageFuncs';


const HeaderArea = styled.header`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #FF0000, #539980);
  padding: 20px;
  margin-bottom: 0;
  
`;
const LinkWithoutSpacing = styled(Link)`
  margin: 0;
  padding: 0;
  text-decoration: none; /* Remova a decoração de link, se desejado */
`;

const Logo = styled.img`
  margin-right: 20px; /* Ajuste a margem conforme necessário */
  border-radius: 20%;
`;

const CenteredContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 220px;
  gap: 20px;
  
`;

const BotaoCarrinho = styled.img`
  /* Defina os estilos da imagem do botão aqui */
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: 40px; /* Ajuste o tamanho da imagem conforme necessário */
`;

const TextoCarrinho = styled.div`
    color: white;
    text-align: center;
    font-family: baskerville old face;
`;

const BotaoHome = styled.img`
  /* Defina os estilos da imagem do botão aqui */
  width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
  height: 40px; /* Ajuste o tamanho da imagem conforme necessário */
`;

const TextoHome = styled.div`
    color: white;
    text-align: center;
    font-family: baskerville old face;
`;

const BotaoPerfil = styled.img`
width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
height: 40px; /* Ajuste o tamanho da imagem conforme necessário */
`;

const TextoPerfil = styled.div`
    color: white;
    text-align: center;
    font-family: baskerville old face;
`;

export const Header = () => {
  const user = getItem('user')
  const name = user.name.split(' ')
  return (
    <HeaderArea>
      <Logo src={imagemLogo} alt="logo" />
      <CenteredContent>
        <Link to="/store"> 
        <BotaoHome src={imagemHome} alt="Home" />
        <TextoHome>Menu Inicial</TextoHome>

        </Link>
        <Link to="/cart">
          
          <BotaoCarrinho src={imagemCarrinho} alt="Carrinho" />
          <TextoCarrinho>Carrinho de Compras</TextoCarrinho>
        </Link>

        <Link to="/profile">
          <BotaoPerfil src={imagemPerfil} alt="Perfil" />
          <TextoPerfil>Meu Perfil</TextoPerfil>

        </Link>
      </CenteredContent>
    </HeaderArea>
  
  )
}
