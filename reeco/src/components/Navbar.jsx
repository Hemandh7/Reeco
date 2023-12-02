
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  padding: 10px 20px;
`;

const Logo = styled.div`
  color: white;
  font-family:cursive
  `
;

const SectionsContainer = styled.div`
  display: flex;
  align-items: left;
`;

const Section = styled.div`
  margin-right: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: left;
  justify-content:space-around;
`;

const CartContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.div`
  background-color: white;
  color: green;
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HelloText = styled.div`
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Reeco</Logo>
      <SectionsContainer>
        <Section>Store</Section>
        <Section>Orders</Section>
        <Section>Analytics</Section>
      </SectionsContainer>
      <CartContainer>
        <CartIcon>🛒</CartIcon>
        <HelloText>Hello, James</HelloText>
      </CartContainer>
    </NavbarContainer>
  );
};

export default Navbar;
