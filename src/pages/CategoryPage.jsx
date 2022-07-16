import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterText = styled.h4`
  font-weight: 400;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 3px;
  margin-right: 5px;
`;

const Option = styled.option``;

const CategoryPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select>
            <Option disabled selected>
              Length
            </Option>
            <Option>Knee length</Option>
            <Option>Long</Option>
            <Option>Midi</Option>
            <Option>Short</Option>
          </Select>
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
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select>
            <Option disabled selected>
              Newest
            </Option>
            <Option>Price low to high</Option>
            <Option>Price high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
