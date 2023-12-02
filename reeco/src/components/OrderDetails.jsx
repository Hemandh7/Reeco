
import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 20px;
`;

const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const OrderPath = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: #333;
  
`;

const OrderNumber = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const ActionButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledBackButton = styled.button`
  background-color: white;
  color: green;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: 1px solid green;
  margin-left: 10px;
`;

const StyledApproveButton = styled.button`
  background-color: green;
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  margin-left: 10px;
`;

const OrderDetails = () => {
  return (
    <SectionContainer>
      <OrderInfoContainer>
        <OrderPath>
          Orders : <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Order 32457ABC</span>
        </OrderPath>
      </OrderInfoContainer>
      <OrderInfoContainer>
      <OrderNumber>Order 32457ABC</OrderNumber>
      <ActionButtonsContainer>
        <StyledBackButton>Back</StyledBackButton>
        <StyledApproveButton>Approve Order</StyledApproveButton>
      </ActionButtonsContainer></OrderInfoContainer>
    </SectionContainer>
  );
};

export default OrderDetails;
