import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  
  box-shadow: 0px 3px 22px #00000017;
`
export const Profile = styled.div`
  color: ${props => props.theme.colors.white};
`;
export const Welcome = styled.p`

`;
export const UserName = styled.span`

`;