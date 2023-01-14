import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  margin: 55px 100px;
  display: flex;
  flex-direction: column;
  ${mobile({ margin: "10px 20px" })}
`;
const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 55px;
  ${mobile({ fontSize: "24px", marginBottom: "10px" })}
`;

const Hr = styled.div`
  background-color: #e5e5e5;
  width: 100%;
  height: 1px;
`;

const ItemContainer = styled.div``;

const Item = styled.div`
  margin: 25px 0;
  display: flex;
  ${mobile({ margin: "5px 0" })}
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  font-size: 30px;
  font-weight: 600;
  ${mobile({ fontSize: "16px" })}
`;

const Desc = styled.p`
  font-size: 30px;
  font-weight: 300;
  margin: 15px 0 20px 0;
  ${mobile({ fontSize: "16px", margin: "5px 0 4px 0" })}
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  ${mobile({ fontSize: "16px", marginBottom: "5px" })}
`;

const Filter = styled.div`
  display: flex;
`;

const FilterTitle = styled.div`
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: 700;
  ${mobile({ fontSize: "15px" })}
`;

const SizeFilter = styled.button`
  width: 63px;
  height: 45px;
  background-color: white;
  border: 1px solid black;

  margin: 0 8px 16px 0;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
  }
  ${mobile({ width: "21px", height: "15px", fontSize: "10px" })}
`;

const ColorFilter = styled.div`
  width: 32px;
  height: 32px;
  background-color: #${(props) => props.color};
  margin-right: 8px;

  ${mobile({ width: "15px", height: "15px" })}
`;
const ImgContainer = styled.div`
  display: flex;
`;

const AmountContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  font-size: 24px;

  ${mobile({ height: "60%", flexDirection: "row", alignItems: "end" })}
`;

const Icon = styled.div`
  border: 1px solid #1d1f22;
  cursor: pointer;
  padding: 5px 10px;
  ${mobile({ fontSize: "10px", margin: "0px 5px" })}
`;

const Image = styled.img`
  max-width: 200px;
  ${mobile({ maxWidth: "100px" })}
`;

const CheckoutContainer = styled.div`
  display: flex;
  width: 20%;
  margin-top: 32px;
`;
const Nomination = styled.div`
  font-weight: 400;
  font-size: 24px;
  ${mobile({ fontSize: "16px" })}
`;
const Value = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-left: 20px;
  ${mobile({ fontSize: "16px" })}
`;
const Button = styled.button`
  width: 20%;
  cursor: pointer;
  margin: 20px 0 254px 0;
  padding: 16px 32px;
  background-color: #5ece7b;
  color: white;
  border: none;
  font-size: 14px;
  font-weight: 600;
  ${mobile({ width: "70%" })}
`;

const Cart = () => {
  const [amount, setAmount] = useState(1);

  const handleAmount = (addition) => {
    if (addition === "increase") {
      setAmount(amount + 1);
    } else {
      setAmount(amount > 0 ? amount - 1 : 0);
    }
  };

  return (
    <Container>
      <Announcement />
      <Navbar />

      <Wrapper>
        <Title> CART </Title>
        <Hr />
        <ItemContainer>
          <Item>
            <InfoContainer>
              <Name>Apollo</Name>
              <Desc>Running Short</Desc>
              <Price>£12.99</Price>
              <FilterTitle>SIZE:</FilterTitle>
              <Filter>
                {" "}
                <SizeFilter>XS</SizeFilter>
                <SizeFilter>S</SizeFilter>
                <SizeFilter>M</SizeFilter>
                <SizeFilter>L</SizeFilter>
              </Filter>
              <FilterTitle>COLOR:</FilterTitle>
              <Filter>
                {" "}
                <ColorFilter color="D3D2D5" />
                <ColorFilter color="2B2B2B" />
                <ColorFilter color="0F6450" />
              </Filter>
            </InfoContainer>
            <ImgContainer>
              <AmountContainer>
                <Icon onClick={() => handleAmount("increase")}> +</Icon>
                <div>{amount}</div>
                <Icon onClick={() => handleAmount("decrease")}>-</Icon>
              </AmountContainer>
              <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F59%2F8f%2F598f71ce41dadfd01921ccb1c4f2fbe8f6d19ac6.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" />
            </ImgContainer>
          </Item>
          <Hr />
        </ItemContainer>
        <CheckoutContainer>
          <Nomination>
            <div>Tax 21%:</div>
            <div>Quantity:</div>
            <div>Totasssl:</div>
          </Nomination>
          <Value>
            <div>$42.00</div>
            <div>{amount}</div>
            <div>${42 * amount}</div>
          </Value>
        </CheckoutContainer>
        <Button>ORDER</Button>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
