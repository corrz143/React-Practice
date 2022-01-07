import React from "react";

const Quantity = ({ quantity, setQuantity }) => {
  const subQuantity = () => {
    if (quantity <= 1) return;
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
  };

  const addQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  return (
    <div className="quantity">
      <button onClick={subQuantity}>&#8722;</button>
      <span>{quantity}</span>
      <button onClick={addQuantity}>&#43;</button>
    </div>
  );
};

export default Quantity;
