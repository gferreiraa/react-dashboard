import React from 'react';
import { Container, TitleContainer, Controllers } from './styles'

const ContentHeader: React.FC = () => {
  return(
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
         <button>01</button>
         <button>02</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
