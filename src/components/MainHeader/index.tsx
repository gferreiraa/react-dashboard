import React from 'react';
import emoji from '../../utils/emoji';

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

  const emojis = React.useMemo(() => {
    const index = Math.floor(Math.random() * emoji.length)
    return emoji[index]
  }, []);

  return(
    <Container>
      <h1>Toogle</h1>
      <Profile>
        <Welcome>Olá, {emojis} </Welcome>
        <UserName>User</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
