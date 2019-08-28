/** Dependencies import */
import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

/** Modules import */
import { Container, Label } from "./styles";
import BoardContext from "../Board/context";

/** Main part of the App: The cards */
export default function Card({ data, index, listIndex }) {
  // creates references for the each card
  const ref = useRef();

  // Gets the move functions from the context
  const { move } = useContext(BoardContext);

  // Manage the drag action and retrieves the position information
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "CARD", index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  // Manage the drop action:
  const [, dropRef] = useDrop({
    accept: "CARD", // Type of the cards allowed
    hover(item, monitor) {
      // Get the information of the card that is hovered by the dragged card
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      // Checks for proceed with the calculation
      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      /**
       *
       * Calculation got from the react-dnd website in reason to get the position
       *  and card information for place the dragged card.
       *
       * */

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      // Prevent the card to be shaken while hovered.
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  // Creates the references for the cards
  dragRef(dropRef(ref));

  // Render the UI
  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label key={label} color={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="" />}
    </Container>
  );
}
