
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Item from './Item';
import { fetchProducts } from '../redux/action';

const Container = styled.div`
  margin: 20px auto;
  max-width: 900px; 
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.input`
width: 50%;
  padding: 12px;
  border-radius:10px;
`;

const AddButton = styled.button`
  background-color: white;
  color: green;
  border: 1px solid green;
  border-radius:10px;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
  font-weight:bold;
`;

const PrintButton = styled.button`
  background-color: white;
  border: 1px solid blue;
  color: blue;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
  font-weight:bold;
  font-size:30px;
`;

const Table = styled.table`
  width: 100%;
  border:1px dotted;
  border-radius:10px;
`;

const TableHeader = styled.th`
border:none;
  border-radius:10px;
  padding: 8px;
  text-align:center;
  
`;

const Orders = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.order.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <TopBox>
        <SearchBar type="text" placeholder="Search..." />
        <div>
          <AddButton>➕ Add</AddButton>
          <PrintButton>🖨 </PrintButton>
        </div>
      </TopBox>
      <Table>
        <thead>
          <tr>
          <TableHeader> </TableHeader>
            <TableHeader>Product Name</TableHeader>
            <TableHeader>Brand</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Action</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Orders;
