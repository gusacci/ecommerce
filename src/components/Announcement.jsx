import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #375b45;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
  ${mobile({ fontSize: "10px" })}
`;

const Announcement = () => {
  return (
    <Container>
      Member Prices: up to 25% off select + free shipping over $25
    </Container>
  );
};

export default Announcement;
