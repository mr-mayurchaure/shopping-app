import React, { useState, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemCard from "./components/ItemCard";

function App() {
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <NavBar cartItems={total} />
      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            padding: "20px 60px",
            backgroundColor: "white",
            boxShadow: "0 0 10px 0 #00000020",
            position: "fixed",
            top: 70,
            right: 0,
            left: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6>Shopping Cart</h6>
          <div style={{ display: "flex", paddingRight: 40 }}>
            <h6 style={{ marginRight: 20 }}>Price</h6>
            <h6>Price Total</h6>
          </div>
        </div>
        <div style={{ marginTop: 140, padding: "20px 60px" }}>
          <ItemCard
            imageUrl={require("../src/images/cithol.jpg")}
            title="Godreg Cithol Soap"
            price={34}
            listNumber={1}
            setTotal={setTotal}
            total={total}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
          <ItemCard
            imageUrl={require("../src/images/thumbsup.jpg")}
            title="Thumbs /up 1.75L"
            price={70.0}
            listNumber={2}
            setTotal={setTotal}
            total={total}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
          <ItemCard
            imageUrl={require("../src/images/apple.jpg")}
            title="Fresh Apples (simple)"
            price={30.0}
            listNumber={3}
            setTotal={setTotal}
            total={total}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
          />
          <ItemCard
            imageUrl={require("../src/images/aata.jpg")}
            title="Aashirwad Aata 15kg"
            price={390.0}
            listNumber={4}
            setTotal={setTotal}
            total={total}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
          />
        </div>
        <div
          style={{
            padding: "20px 100px",
            backgroundColor: "white",
            boxShadow: "0 0 10px 0 #00000020",
            position: "fixed",
            bottom: 0,
            right: 0,
            left: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "end",
            alignItems: "center",
          }}
        >
          <h6 style={{ marginRight: 20 }}>Grand Total</h6>
          <h6>{totalPrice}</h6>
        </div>
      </div>
    </>
  );
}

export default App;
