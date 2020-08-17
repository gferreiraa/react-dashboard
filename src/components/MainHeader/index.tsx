import React from 'react';
import emoji from '../../utils/emoji';

import Toggle from '../Toggle' 

import { Container, Profile, Welcome, UserName } from './styles';

const MainHeader: React.FC = () => {

  const emojis = React.useMemo(() => {
    const index = Math.floor(Math.random() * emoji.length)
    return emoji[index]
  }, []);

  return(
    <Container>
      <Toggle/>
      <Profile>
        <Welcome>Hello, {' '} {emojis} <UserName>User</UserName> </Welcome>
      </Profile>
    </Container>
  );
};

export default MainHeader;
