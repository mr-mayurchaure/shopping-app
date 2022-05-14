import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function NavBar({ cartItems }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "blueviolet",
        display: "flex",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        flexDirection: "row",
        boxSizing: "border-box",
        height: 70,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <h2
        style={{
          color: "blueviolet",
          textTransform: "uppercase",
          backgroundColor: "white",
          padding: "4px 10px",
          borderRadius: 10,
          fontWeight: 500,
          fontSize: 20,
        }}
      >
        Shopping
      </h2>
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineShoppingCart style={{ color: "white", fontSize: 26 }} />
        <p
          style={{
            color: "blueviolet",
            marginLeft: 10,
            backgroundColor: "white",
            padding: "6px 10px",
            borderRadius: 10,
            fontSize: 20,
          }}
        >
          {cartItems ? cartItems : 0}
        </p>
      </div>
    </div>
  );
}

export default NavBar;
