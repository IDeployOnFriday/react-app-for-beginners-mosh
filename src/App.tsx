import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {

  const [alertVisible, setAlertVisiblity] = useState(false);

  return <div>

    {alertVisible === true ? <Alert onClose={() => setAlertVisiblity(false)}  >My Alert</Alert> : null}
    <Button color="secondary" onClick={() => setAlertVisiblity(true)}>Click Me</Button>
  </div>
}

export default App;
