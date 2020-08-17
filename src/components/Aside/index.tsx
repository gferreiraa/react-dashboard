import React from 'react';
import { Container, Header, Brand, MenuContainer, MenuItemLink, Title } from './styles';
import brandImg from '../../assets/logo.svg';
import { AiFillDashboard, AiOutlineUpCircle, AiOutlineDownCircle, AiOutlineLogout } from 'react-icons/ai';


const Aside: React.FC = () => {
  return(
    <Container>
      <Header>
        <Brand src={brandImg}  alt= 'Company Brand'/>
        <Title>My Wallet</Title>
      </Header>
      <MenuContainer>
        <MenuItemLink href='#'>
          <AiFillDashboard/>
          Dashboard
        </MenuItemLink>
        <MenuItemLink href='#'>
          <AiOutlineUpCircle/>
          Down Payments
        </MenuItemLink>
        <MenuItemLink href='#'>
          <AiOutlineDownCircle/>
          Expenses
        </MenuItemLink>
        <MenuItemLink href='#'>
          <AiOutlineLogout/>
          Logout
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
