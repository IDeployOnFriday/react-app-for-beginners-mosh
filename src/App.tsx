import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Message from "./message.tsx";
import {MyForm} from "./form.tsx";



function App() {

  const [alertVisible, setAlertVisiblity] = useState(false);
    const [greetingVisiblity, setGreetingVisiblity] = useState(false);

  return <div>

    {
        alertVisible === true ?
        <Alert onClose={() => setAlertVisiblity(false)}  >My Alert</Alert>
        : null
    }
    <Button color="secondary" onClick={() => setAlertVisiblity(true)}>show Alert</Button>
    <Button color="primary" onClick={() => setGreetingVisiblity(!greetingVisiblity)}>Show Me Message</Button>
      {
          greetingVisiblity !== true ?
          null
          : <Message/>
      }
      <MyForm/>
  </div>
}

export default App;
