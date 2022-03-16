import { useState } from "react";
import axios from "axios";
export default function App() {
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    console.log(picture);
    axios
      .post("http://localhost:8000/user", {
        username: username,
        profilePicture: picture,
      })
      .catch((err) => console.log(err));

    console.log(username);
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPicture(URL.createObjectURL(img));
    }
  };
  return (
    <>
      <h1>Hello world !</h1>
      <form
        // onSubmit={(e) => onSubmit(e)}
        action="http://localhost:8000/user/"
        method="post"
      >
        <input
          type="text"
          placeholder="username"
          // onChange={(e) => handleChange(e)}
        />
        <input
          type="file"
          // onChange={(e) => onImageChange(e)}
        />

        <button>Send</button>
      </form>
    </>
  );
}
// onClick={() => handleClick()}
