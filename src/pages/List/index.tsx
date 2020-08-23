import * as React from 'react';
import { Container } from "./styles";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from '../../components/SelectIpunt';

const List: React.FC = () => {

  const options = [
    { value: 'John Doe', label: 'Hero' },
    { value: 'Garp', label: 'Hero' },
    { value: 'Ace', label: 'Pirate' } 
  ]

  return(
    <Container>
    <ContentHeader title="Entradas" lineColor={"#fff"}>
      <SelectInput options={options}/>
    </ContentHeader>
  </Container>
  )
};

export default List;
