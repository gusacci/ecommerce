import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 3px;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="f7f6f4">
          <ImgContainer>
            {" "}
            <Image src="https://images.pexels.com/photos/1140907/pexels-photo-1140907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />{" "}
          </ImgContainer>
          <InfoContainer>
            <Title>SALE</Title>
            <Desc>
              Members get free delivery and 10% on the first purchase. Not a
              member yet? Join now, it's free!
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="DFE8CC">
          <ImgContainer>
            {" "}
            <Image src="https://images.pexels.com/photos/1140907/pexels-photo-1140907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />{" "}
          </ImgContainer>
          <InfoContainer>
            <Title>Summer vibes</Title>
            <Desc>
              Members get free delivery and 10% on the first purchase. Not a
              member yet? Join now, it's free!
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="DAE2B6">
          <ImgContainer>
            {" "}
            <Image src="https://images.pexels.com/photos/1140907/pexels-photo-1140907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />{" "}
          </ImgContainer>
          <InfoContainer>
            <Title>Influencer's choice</Title>
            <Desc>
              Members get free delivery and 10% on the first purchase. Not a
              member yet? Join now, it's free!
            </Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
