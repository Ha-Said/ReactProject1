import React, { useState } from "react";
import Form from "./form";
import CardList from "./CardList";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <div>
      <Form addCard={addCard} />

      <CardList cards={cards} />
    </div>
  );
}

export default App;
