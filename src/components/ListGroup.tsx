import { Fragment } from "react/jsx-runtime";
import type { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];
  //items = [];

  // event handler 
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>There are no items in the list</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
