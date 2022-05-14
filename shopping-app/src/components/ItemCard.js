import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function ItemCard({
  imageUrl,
  title,
  price,
  listNumber,
  setTotal,
  total,
  setTotalPrice,
  totalPrice,
}) {
  const [items, setItems] = useState(0);
  const handleAddItems = () => {
    setItems(items + 1);
    setTotal(total + 1);
    setTotalPrice(totalPrice + price);
  };
  const handleRemoveItems = () => {
    if (items == 0 || totalPrice == 0) {
      return;
    }
    setTotal(total - 1);
    setItems(items - 1);
    setTotalPrice(totalPrice - price);
  };
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        marginBottom: 10,
        padding: "10px 40px",
        display: "flex",
        alignItems: "center",
        boxShadow: "0 0 4px 0 #00000020",
        boxSizing: "border-box",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h5 style={{ fontSize: 20, marginRight: 60 }}>{listNumber}</h5>
        <img src={imageUrl} style={{ width: 80, marginRight: 30 }} />
        <h4>{title}</h4>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h6>{items} PC</h6>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
          }}
        >
          <AiOutlinePlusCircle
            style={{ fontSize: 20, marginRight: 10, cursor: "pointer" }}
            onClick={() => handleAddItems()}
          />
          <AiOutlineMinusCircle
            style={{ fontSize: 20, cursor: "pointer" }}
            onClick={() => handleRemoveItems()}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginRight: 20, paddingRight: 40 }}>{price} Rs</h2>
        <h4
          style={{
            width: 40,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {items * price} /-
        </h4>
      </div>
    </div>
  );
}

export default ItemCard;
