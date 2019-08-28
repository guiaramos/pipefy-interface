/** Dependencies import */
import React, { useState } from "react";
import { produce } from "immer";

/** Modules import */
import List from "../List";
import { Container } from "./styles";
import { loadLists } from "../../services/api";
import BoardContext from "./context";

/** Connection with the API */
const data = loadLists();

/** The Board represents the container for the main page of the app */
export default function Board() {
  // Using States for manage the card information
  const [lists, setLists] = useState(data);

  // It makes the changes on the state according to movement of the card
  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  // Render the UI
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
