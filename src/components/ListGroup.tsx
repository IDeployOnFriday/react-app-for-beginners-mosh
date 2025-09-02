import { Fragment } from "react/jsx-runtime";


function ListGroup() {

    let items = ['New York', 'San Francisco', 'Los Angeles', 'Chicago', 'Houston'];
    items = [];

    if (items.length === 0) return <p>There are no items in the list</p>;
    

  return (
    <>
      <h1>List</h1>
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
