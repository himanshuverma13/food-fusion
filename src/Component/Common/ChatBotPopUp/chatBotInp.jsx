import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setChatBotTableOrder } from "../Redux/ChatBotPopup/chatBotPopupSlice";

const ChatBotFunctionality = () => {
  // List of available dishes
  const availableDishes = ["Pizza", "Paneer", "Samosa", "Pasta"];

  const [tables, setTables] = useState([
    { id: 1, color: "white", order: null },
    { id: 2, color: "white", order: null },
    { id: 3, color: "white", order: null },
    { id: 4, color: "white", order: null },
  ]);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // Split the input into table number and dish name
    const [tableNumberStr, dishName] = inputValue.split(" ");
    const tableNumber = parseInt(tableNumberStr.trim());

    // Validate table number and dish name
    if (
      isNaN(tableNumber) ||
      tableNumber < 1 ||
      tableNumber > tables.length ||
      !dishName ||
      dishName.trim() === ""
    ) {
      alert("Invalid input! Use format 'tableNumber-dishName' (e.g., '1-Pizza')");
      return;
    }


    // Check if the dish is available
    if (!availableDishes.includes(dishName.trim())) {
      alert(`Sorry, ${dishName.trim()} is not available!`);
      return;
    }
// Log the selected table number and dish to the console
let payload = {
    customer_table: tableNumber,
    dishName: dishName?.trim(),
    customer_status:"Table_Order"
  }
  dispatch(setChatBotTableOrder(payload));


    // Update table with the dish and change the color to red
    
    setTables((prevTables) =>
      prevTables.map((table) =>
        table.id === tableNumber
          ? { ...table, color: "red", order: dishName.trim() }
          : table
      )
    );
    setInputValue(""); // Reset the input field
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <input
          type="text"
          placeholder="Enter tableNumber-dishName (e.g., 1-Pizza)"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <strong>Available Dishes:</strong>
        <ul>
          {availableDishes.map((dish, index) => (
            <li key={index}>{dish}</li>
          ))}
        </ul>
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        {tables.map((table) => (
          <div
            key={table.id}
            style={{
              width: "100px",
              height: "100px",
              margin: "10px",
              backgroundColor: table.color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              border: "1px solid black",
            }}
          >
            <div>
              <p>Table {table.id}</p>
              {table.order && <p>Dish: {table.order}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatBotFunctionality;