import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${props => props.theme.colors.secondary};
  padding-left: 20px;
  box-shadow: 5px 0 5px -5px #00000017;

`
export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;
export const Title = styled.span`
  color: ${props => props.theme.colors.white};
  margin-left: 10px;
`; 
export const Brand = styled.img`
  width: 40px;
  height: 40px;
`; 
export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column; 
  margin-top: 50px;
`; 
export const MenuItemLink = styled.a`
  color: ${props => props.theme.colors.info};
  text-decoration: none;
  margin: 7px 0;
  display: flex;
  align-items: center;
  transition: opacity .3s;
  &:hover {
    opacity: .7;
  }
  > svg {
    font-size: 20px;
    margin-right: 15px;
  }
`; 