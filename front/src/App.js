import { useState } from "react";
import axios from "axios";
export default function App() {
  const [username, setUsername] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    axios
      .post("http://localhost:8000/user", {
        username: username,
      })
      .catch((err) => console.log(err));

    console.log(username);
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <h1>Hello world !</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={() => handleClick()}>Send</button>
      </form>
      <p></p>
    </>
  );
}
