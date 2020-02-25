import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";

const Item: any = SortableElement(({ value }: { value: string }) => (
  <li>{value}</li>
));

const Container: any = SortableContainer(({ items }: { items: [] }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <Item key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

function App() {
  const [items, setItems] = useState([
    "teste 1",
    "teste 2",
    "teste 3",
    "teste 4"
  ]);

  function onSortEnd({
    oldIndex,
    newIndex
  }: {
    oldIndex: number;
    newIndex: number;
  }) {
    setItems(arrayMove(items, oldIndex, newIndex));
  }

  return (
    <div className="App">
      {/* <Container items={items} onSortEnd={onSortEnd} /> */}
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
