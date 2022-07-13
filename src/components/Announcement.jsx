import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #375b45;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  font-weight: 400;
`;

const Announcement = () => {
  return (
    <Container>
      Member Prices: up to 25% off select Kids & Baby tees + free shipping over
      $25
    </Container>
  );
};

export default Announcement;
