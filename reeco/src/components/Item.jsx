import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { approveProduct, markProductMissing, updateProduct } from '../redux/action';

const TableRow = styled.tr`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const TableCell = styled.td`
  padding: 8px;
  text-align:center;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-right: 5px;
  font-size:15px;
  font-weight:bold;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Item = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedQuantity, setEditedQuantity] = useState(product.quantity);
  const [isUrgentMissing, setIsUrgentMissing] = useState(false);
  const imageUrl = "https://drive.google.com/uc?export=view&id=17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV";

  const handleApprove = () => {
    dispatch(approveProduct(product.id));
  };

  const handleMissing = () => {
    setIsUrgentMissing(true);
  };

  const handleUrgencySelection = (urgent) => {
    dispatch(markProductMissing(product.id, urgent));
    setIsUrgentMissing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCloseEdit = () => {
    setEditing(false);
  };

  const handleSaveEdit = () => {
    dispatch(updateProduct(product.id, editedPrice, editedQuantity));
    handleCloseEdit();
  };

  return (
    <TableRow key={product.id}>
      <TableCell>
        <img src={imageUrl} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.brand}</TableCell>
      <TableCell>{product.price}</TableCell>
      <TableCell>{product.quantity}</TableCell>
      <TableCell>{product.price*product.quantity}</TableCell>
      <TableCell>{product.status}</TableCell>
      <TableCell>
        <Button onClick={handleApprove}>✔</Button>
        <Button onClick={handleMissing}>X</Button>
        <Button onClick={handleEdit}>Edit</Button>
      </TableCell>

      {isEditing && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={handleCloseEdit}>&times;</CloseButton>
            <h2>Edit Product</h2>
            <label>
              Price:
              <input
                type="number"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(e.target.value)}
              />
            </label>
            <Button onClick={handleSaveEdit}>Save</Button>
          </ModalContent>
        </ModalOverlay>
      )}

      {isUrgentMissing && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={() => setIsUrgentMissing(false)}>&times;</CloseButton>
            <h2>Is the Missing Item Urgent?</h2>
            <Button onClick={() => handleUrgencySelection(true)}>Yes</Button>
            <Button onClick={() => handleUrgencySelection(false)}>No</Button>
          </ModalContent>
        </ModalOverlay>
      )}
    </TableRow>
  );
};

export default Item;