import {
  AlternateEmailOutlined,
  Facebook,
  Instagram,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h1`
  margin-bottom: 10px;
`;

const Desc = styled.p`
  margin-bottom: 10px;
`;

const SmmContainer = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #375b45;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  ${mobile({ display: "none" })}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  padding-left: 35px;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;

  ${mobile({ backgroundColor: "#eee", width: "100%" })}
`;

const Title = styled.h2``;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>UNIT</Logo>
        <Desc>
          Every piece is made to last beyond the season. With a focus on
          craftmanship, we bring you essentials for the modern wardrobe. Buy
          better, keep forever.
        </Desc>
        <SmmContainer>
          <IconContainer>
            <Facebook />
          </IconContainer>
          <IconContainer>
            <Instagram />
          </IconContainer>
          <IconContainer>
            <Twitter />
          </IconContainer>
          <IconContainer>
            <Pinterest />
          </IconContainer>
        </SmmContainer>
      </Left>
      <Center>
        <List>
          <ListItem>Contact Us </ListItem>
          <ListItem>Delivery Information</ListItem>
          <ListItem>Returns and Refunds</ListItem>
          <ListItem> Store Locator</ListItem>
          <ListItem> Customer Service</ListItem>
          <ListItem> Payment</ListItem>
          <ListItem>Size Guide</ListItem>
          <ListItem>Product Care</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact:</Title>
        <ContactItem>
          <LocationOnOutlined style={{ marginRight: "10px" }} />
          Park Avenue , 11 Oklahoma
        </ContactItem>
        <ContactItem>
          <LocalPhoneOutlined style={{ marginRight: "10px" }} />
          +38 067 5511 4382
        </ContactItem>
        <ContactItem>
          <AlternateEmailOutlined style={{ marginRight: "10px" }} />
          info@unitfashion.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
