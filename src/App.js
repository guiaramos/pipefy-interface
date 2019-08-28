/** App info
 *
 * The app was built to be a mirror of the Pipefy "simple task list" interface
 * The drag n drop function was build thanks to the react-dnd framework
 *
 * Also, the drag n drop does not work when the list is empty, once it takes cards as reference for positioning
 * I will implement the list part on the future
 *
 */

/** Dependencies import */
import React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

/** Module import */
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

/** Render the app interface */
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />
      <GlobalStyle />
    </DndProvider>
  );
}
export default App;
