/** Dependencies import */
import React from "react";
import { MdAdd } from "react-icons/md";

/** Modules import */
import { Container } from "./styles";
import Card from "../Card";

/** Creates the list */
export default function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type="button">
            <MdAdd size={18} color="#FFF" />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}
