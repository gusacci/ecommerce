import React, { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
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
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products:</FilterText>
          <Select name="length" onChange={handleFilters}>
            <Option>Length</Option>
            <Option>Knee length</Option>
            <Option>Long</Option>
            <Option>Midi</Option>
            <Option>Short</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="lowtohigh">Price low to high</Option>
            <Option value="hoghtolow">Price high to low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default CategoryPage;
