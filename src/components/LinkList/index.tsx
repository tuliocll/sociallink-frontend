import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

import { LinkCard } from "../";
import { Ul } from "./styles";

const Item: any = SortableElement(({ value }: { value: string }) => (
  //   <li>{value}</li>
  <LinkCard />
));

const Container: any = SortableContainer(({ items }: { items: [] }) => {
  return (
    <Ul>
      {items.map((value, index) => (
        <Item key={`item-${value}`} index={index} value={value} />
      ))}
    </Ul>
  );
});

export default function LinkList() {
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
    <>
      <Container items={items} onSortEnd={onSortEnd} />
    </>
  );
}
