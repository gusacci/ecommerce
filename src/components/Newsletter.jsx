import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30vh;
  background-color: #f7f6f4;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;
const Title = styled.h3`
  font-size: 35px;
`;
const Desc = styled.p``;
const InputContainer = styled.div`
  border-radius: 4px;
  display: flex;
  border: 0.5px solid gray;
  width: 50%;
  height: 40px;
  background-color: white;
  justify-content: space-between;
  ${mobile({ width: "80%" })}
`;
const Input = styled.input`
  border-radius: 4px 0 0 4px;
  border: none;
  flex: 6;
  padding-left: 20px;
`;
const Button = styled.button`
  border-radius: 0 4px 4px 0;
  border: none;
  cursor: pointer;
  flex: 1;
  background-color: #375b45;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title> Newsletter</Title>
      <Desc>SIGN UP FOR 10% OFF YOUR FIRST ORDER</Desc>
      <InputContainer>
        <Input placeholder="Type your email.." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
