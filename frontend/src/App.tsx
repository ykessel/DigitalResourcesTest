import { useState } from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/table";

function App() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const baseURL = "http://127.0.0.1:5000";

  const send = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let newUser = { firstname, lastname, email };
    axios
      .post(baseURL + "/users/add", newUser)
      .then((res: any) => console.log("From the back: ", res.data.succes_msg))
      .catch((err: any) => console.log("Error: ", err));
  };

  return (
    <div className="container">
      <div className="content">
        <section className="entry">
          <form onSubmit={send}>
            <div className="formField">
              <label>Firstname</label>
              <input
                onChange={(e) => setFirstname(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="formField">
              <label>Lastname</label>
              <input
                onChange={(e) => setLastname(e.target.value)}
                type="text"
                required
              />
            </div>
            <div className="formField">
              <label>Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
          <div className="table-container">
            <Table firstname={firstname} lastname={lastname} email={email} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
