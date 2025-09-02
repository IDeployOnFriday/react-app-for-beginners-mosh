import ListGroup from "./components/ListGroup";

  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];

function App() {
  return <div>
    <ListGroup items={items} heading="Cities"/>
  </div>
}

export default App