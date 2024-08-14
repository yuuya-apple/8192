import logo from "./logo.svg";
import "./App.css";
import { Main } from "./contents/Main";
import { useState } from "react";
import { Success } from "./contents/Success";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div>
      {isSuccess ? (
        <Success setIsSuccess={setIsSuccess} />
      ) : (
        <Main setIsSuccess={setIsSuccess} />
      )}
    </div>
  );
}

export default App;
