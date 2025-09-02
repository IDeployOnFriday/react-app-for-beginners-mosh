import { Fragment } from "react/jsx-runtime";


function ListGroup() {

    const items = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston'];
    //items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? <p>There are no items in the list</p>: null}
      <ul className="list-group">
        {items.map(item => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
