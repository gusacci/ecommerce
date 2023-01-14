import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  ${mobile({ flexDirection: "column" })}
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 80vh;
  width: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  margin 20px;
`;

const Title = styled.h2``;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.p`
  font-size: 24px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ margin: "10px 0px" })}
`;

const FilterTitle = styled.div``;

const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 5px;
  cursor: pointer;

  &:visited {
    opacity: 0;
  }
`;

const Select = styled.select`
  margin-left: 5px;
  padding: 3px;
`;

const Option = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  ${mobile({ width: "100%", margin: "0px 0px 10px 0px" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid grey;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.div`
  cursor: pointer;
  border: 1px solid #375b45;
  padding: 10px;
  background-color: white;

  &:hover {
    background-color: #375b45;
    color: white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F26%2Fa5%2F26a5da5ab1189ba6175e2324f5bb4f4dd3bf087c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D" />
        </ImgContainer>
        <InfoContainer>
          <Title>Satin wrapover shirt dress</Title>
          <Description>
            Crafted from a fuchsia-pink cotton blend with a touch of stretch,
            this mini-length sleeveless dress is cut for a slim fit and features
            a modern mock neck and central seam for structure. The concealed zip
            closure at the back provides a minimal finish.
          </Description>

          <Price>£17.99</Price>
          <FilterContainer>
            <Filter>
              {" "}
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#7BCE85" />
              <FilterColor color="#FF8A27" />
              <FilterColor color="#FFA4B7" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <Select>
                <Option disabled selected>
                  Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>1</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
