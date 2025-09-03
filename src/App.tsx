import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
  return <div>
    <Alert>Hello <span>World</span></Alert>
    <Button color="secondary" onClick={() => console.log("Button clicked" )}>Click Me</Button>
  </div>
}

export default App;
