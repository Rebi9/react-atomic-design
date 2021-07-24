import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <SHeader>
      <Slink to="/">HOME</Slink>
      <Slink to="/users">USERS</Slink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0px;
`;

const Slink = styled(Link)`
  margin: 0 8px;
`;
