import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import {MyForm} from "./form.tsx";



function App() {

  const [alertVisible, setAlertVisiblity] = useState(false);
    const [inputFormVisiblity, setInputFormVisiblity] = useState(false);

  return <div>


    {
        alertVisible === true ?
        <Alert onClose={() => setAlertVisiblity(!alertVisible)}  >My Alert</Alert>
        : null
    }
    <Button color="secondary" onClick={() => setAlertVisiblity(!alertVisible)}>show Alert</Button>
    <Button color="primary" onClick={() => setInputFormVisiblity(!inputFormVisiblity)}>Show Input Form</Button>
      {
          inputFormVisiblity !== true ?
          null
          : <MyForm/>
      }

  </div>
}

export default App;
